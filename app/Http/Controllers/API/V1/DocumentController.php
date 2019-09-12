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

        return response()->json([
            'result' => $records
        ]);
    }

    public function getFormNumber(Request $request)
    {
        $forms = Form::where('number', 'LIKE', "%$request->formNumber%")->get();

        return response()->json([
            'result' => $forms
        ]);
    }
}