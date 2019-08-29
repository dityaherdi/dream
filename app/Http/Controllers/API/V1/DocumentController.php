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

class DocumentController extends Controller
{
    public function upload(Request $request)
    {
        // Save to patients table
        $patient = Patient::create([
            'nrm' => $request->nrm,
            'name' => Content::capitalizeEachWord($request->name)
        ]);

        // Save to directories table
        $directory = Directory::create([
            'nrm' => Content::folderNRM($request->nrm),
            'year' => Content::folderYear($request->date),
            'month' => Content::folderMonth($request->date)
        ]);

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
            $record = Record::with(['patient', 'directory'])->whereHas('patient', function ($query) use ($keyword) {
                $query->where('name', 'LIKE', "%$keyword%")->orWhere('nrm', 'LIKE', "%$keyword%");
            })->get();

            return response()->json([
                'result' => $record
            ]);
        }
    }
}