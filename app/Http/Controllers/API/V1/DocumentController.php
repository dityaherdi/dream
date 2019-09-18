<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Helpers\ContentHelper as Content;
use App\Patient;
use App\Directory;
use App\Record;
use App\Form;

class DocumentController extends Controller
{
    public function upload(Request $request)
    {
        // Insert form number / name if doesn't exist
        if ($request->form_number != null || $request->form_name != null) {
            $form = Form::firstOrCreate(['number' => $request->formNumber, 'name' => $request->formName],
                [
                    'number' => $request->formNumber,
                    'name' => $request->formName
                ]
            );
        }
        // Save to patients table
        $patient = Patient::firstOrCreate(['nrm' => $request->nrm],
            [
                'nrm' => $request->nrm,
                'name' => Content::capitalizeEachWord($request->name)
            ]
        );

        // Save to directories table
        $directory = Directory::firstOrCreate(['nrm'=> Content::folderNRM($request->nrm), 'year' => Content::folderYear($request->date), 'month' => Content::folderMonth($request->date)],
            [
                'nrm' => Content::folderNRM($request->nrm),
                'year' => Content::folderYear($request->date),
                'month' => Content::folderMonth($request->date)
            ]
        );

        // Store file and save to records table
        $folderNRM = Content::folderNRM($request['nrm']);
        $folderYear = Content::folderYear($request['date']);
        $folderMonth = Content::folderMonth($request['date']);

        for ($i=0; $i < count($request['docRm']); $i++) {
            $exploded1 = explode(';', $request['docRm'][$i]);
            $exploded2 = explode(',', $exploded1[1]);
            $file = base64_decode($exploded2[1]);
            $fileName = Content::fileName($request['nrm'], $request['name'], $i);

            Storage::put('public/'.$folderNRM.'/'.$folderYear.'/'.$folderMonth.'/'.$fileName, $file);

            Record::create([
                'patient_id' => $patient->id,
                'directory_id' => $directory->id,
                'filename' => $fileName,
                'form_number' => $request->formNumber,
                'form_name' => Content::capitalizeEachWord($request->formName),
                'record_date' => Carbon::parse($request->date)
            ]);
        }

        return response()->json([
            'result' => null,
            'message' => 'Dokumen Rekam Medis Berhasil di-upload!'
        ]);
    }

    public function search(Request $request)
    {
        if ($keyword = $request->keyword) {
            $result = Record::join('patients', 'patients.id', '=', 'records.patient_id')
                            ->join('directories', 'directories.id', '=', 'records.directory_id')
                            ->select('directories.year', 'patients.id', 'patients.nrm', 'patients.name')
                            ->where('patients.nrm', 'LIKE', "$keyword")
                            ->orWhere('patients.name', 'LIKE', "$keyword")
                            ->distinct('directories.year', 'patients.nrm')
                            ->get();

            return response()->json([
                'result' => $result
            ]);
        }
    }

    public function month(Request $request)
    {
        $month = Record::join('patients', 'patients.id', '=', 'records.patient_id')
                        ->join('directories', 'directories.id', '=', 'records.directory_id')
                        ->select('directories.month')
                        ->where('patients.id', $request->id)
                        ->where('directories.year', $request->year)
                        ->distinct('directories.month')
                        ->pluck('directories.month');

        return response()->json([
            'result' => $month
        ]);
    }

    public function documents(Request $request)
    {
        $records = Record::with([
                        'patient:id,nrm,name',
                        'directory:id,nrm,year,month'
                    ])->whereHas('patient', function ($query) use ($request) {
                        $query->where('id', $request->id);
                    })->whereHas('directory', function ($query) use ($request) {
                        $query->where('year', $request->year)->where('month', $request->month);
                    })->orderBy('record_date', 'DESC')->get();

        foreach ($records as $r) {
            if ($r->form_number == null || $r->form_name == null) {
                $r->form_number = $r->patient->nrm;
                $r->form_name = 'Rangkuman Rekam Medis - '.$r->patient->name;
            }
        }

        return response()->json([
            'result' => $records
        ]);
    }

    public function getFormNumber(Request $request)
    {
        $forms = Form::where('number', 'LIKE', "%$request->formNumber%")->orderBy('number', 'ASC')->get();

        return response()->json([
            'result' => $forms
        ]);
    }

    public function openDocument(Request $request)
    {
        $record = Record::with(['directory', 'patient'])->findOrFail($request->id);
        if ($record->form_number == null || $record->form_name == null) {
            $record->form_number = $record->patient->nrm;
            $record->form_name = 'Rangkuman Rekam Medis - '.$record->patient->name;
        }
        $path = 'public/'.$record->directory->nrm.'/'.$record->directory->year.'/'.$record->directory->month.'/'.$record->filename;
        $pdf = base64_encode(Storage::get($path));
        
        return response()->json([
            'base64' => $pdf,
            'record' => $record
        ]);
    }

    public function updateRecordDate(Request $request, $id = null)
    {
        $currentPath = 'public/'.$request->document['directory']['nrm'].'/'.$request->document['directory']['year'].'/'.$request->document['directory']['month'].'/'.$request->document['filename'];
       
        $directory = Directory::firstOrCreate(['nrm' => Content::folderNRM($request->document['patient']['nrm']), 'year' => Content::folderYear($request->date), 'month' => Content::folderMonth($request->date)],
        [
            'nrm' => Content::folderNRM($request->document['patient']['nrm']),
            'year' => Content::folderYear($request->date),
            'month' => Content::folderMonth($request->date)
        ]);

        $newPath = 'public/'.$directory->nrm.'/'.$directory->year.'/'.$directory->month.'/'.$request->document['filename'];

        $record = Record::where(['id' => $id])->update(['directory_id' => $directory->id, 'record_date' => Carbon::parse($request->date)]);

        Storage::move($currentPath, $newPath);

        return response()->json([
            'message' => 'Dokumen Telah Dipindahkan!'
        ]);

    }
}