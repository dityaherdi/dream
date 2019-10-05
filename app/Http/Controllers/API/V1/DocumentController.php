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
use DB;

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
                'name' => Content::convertToUppercase($request->name)
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
                'form_name' => Content::convertToUppercase($request->formName),
                'note' => $request->note,
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
            // result dari DB DREAM
            $result = Record::join('patients', 'patients.id', '=', 'records.patient_id')
                            ->join('directories', 'directories.id', '=', 'records.directory_id')
                            ->select('directories.year', 'patients.id', 'patients.nrm', 'patients.name')
                            ->whereNull('records.deleted_date')
                            ->where('patients.nrm', 'LIKE', "%$keyword%")
                            ->orWhere('patients.name', 'LIKE', "%$keyword%")
                            ->distinct('directories.year', 'patients.nrm', 'patients.name')
                            ->get();
            
            // cek apakah result muncul 1 data atau lebih dari 1 data
            if ($result->count() == 1) {
                $sanataPatient = DB::connection('sqlsrv')
                ->table('mPasien')
                ->select('NamaPasien', 'NamaAlias')
                ->where(['NRM' => $result[0]->nrm])
                ->get();

                if (sizeof($sanataPatient) != 0) {
                    if ($sanataPatient[0]->NamaAlias) {
                        $sanataPatient = $sanataPatient[0]->NamaAlias;
                    } else {
                        $sanataPatient = $sanataPatient[0]->NamaPasien;
                    }
                }

                // jika ada perbedaan nama pasien, update DB DREAM dengan data dari Sanata
                if (is_string($sanataPatient)) {
                    if ($sanataPatient != $result[0]->name) {
                        $updatedPatient = Patient::findOrFail($result[0]->id);
                        $updatedPatient->name = $sanataPatient;
                        
                        $result[0]->name = $sanataPatient;
                        
                        $updatedPatient->save();
                    }
                }
            } else {
                return response()->json([
                    'result' => $result
                ]);
            }

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
                        ->whereNull('records.deleted_date')
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
        $records = Record::whereNull('deleted_date')->with([
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

    // Working
    // menggunakan base64, tetapi tidak dapat digunakan untuk file / dokumen berukuran besar
    // public function openDocument(Request $request)
    // {
    //     $record = Record::with(['directory', 'patient'])->findOrFail($request->id);
    //     if ($record->form_number == null || $record->form_name == null) {
    //         $record->form_number = $record->patient->nrm;
    //         $record->form_name = 'Rangkuman Rekam Medis - '.$record->patient->name;
    //     }

    //     $path = 'public/'.$record->directory->nrm.'/'.$record->directory->year.'/'.$record->directory->month.'/'.$record->filename;
    //     $pdf = base64_encode(Storage::get($path));
        
    //     return response()->json([
    //         'base64' => $pdf,
    //         'record' => $record
    //     ]);
    // }
    // Working

    // public function openDocument(Request $request)
    // {
    //     $record = Record::with(['directory', 'patient'])->findOrFail($request->id);
    //     if ($record->form_number == null || $record->form_name == null) {
    //         $record->form_number = $record->patient->nrm;
    //         $record->form_name = 'Rangkuman Rekam Medis - '.$record->patient->name;
    //     }

    //     $path = storage_path().'/app/public/'.$record->directory->nrm.'/'.$record->directory->year.'/'.$record->directory->month.'/'.$record->filename;
    //     // $path = 'public/'.$record->directory->nrm.'/'.$record->directory->year.'/'.$record->directory->month.'/'.$record->filename;
    //     // $pdf = base64_encode(Storage::get($path));

    //     return response()->download($path);
    //     // return response()->json([
    //     //     'blob' => base64_encode($pdf)
    //     // ]);
    // }

    // gunakan function download dokumen untuk view dokumen (menggunakan blob)
    public function downloadDocument(Request $request)
    {
        $record = Record::whereNull('deleted_date')->with(['directory', 'patient'])->findOrFail($request->id);
        if ($record->form_number == null || $record->form_name == null) {
            $record->form_number = $record->patient->nrm;
            $record->form_name = 'Rangkuman Rekam Medis - '.$record->patient->name;
        }

        $path = storage_path().'/app/public/'.$record->directory->nrm.'/'.$record->directory->year.'/'.$record->directory->month.'/'.$record->filename;

        return response()->download($path);
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

        $record = Record::whereNull('deleted_date')->where(['id' => $id])->update(['directory_id' => $directory->id, 'record_date' => Carbon::parse($request->date)]);

        // jika bulan dan tahun kedatangan sama maka jangan pindahkan
        if (!Storage::exists($newPath)) {
            Storage::move($currentPath, $newPath);
        }

        return response()->json([
            'message' => 'Dokumen Telah Dipindahkan!'
        ]);

    }

    public function updateNote(Request $request)
    {
        $record = Record::findOrFail($request->id);
        $record->update([
            'note' => $request->note
        ]);

        return response()->json([
            'result' => '',
            'message' => 'Catatan / Keterangan telah diperbarui!'
        ]);
    }

    // delete Record on progress
    // ubah field deleted_date menjadi NOW()
    // hapus dokumen rekam medis di storage
    public function deleteRecord(Request $request)
    {
        // return 'Deleting';
        
        $deleted = Record::whereNull('deleted_date')->where('id', $request->id)->update(['deleted_date' => Carbon::now()]);

        if ($deleted) {
            $pathToDelete = 'public/'.$request->directory['nrm'].'/'.$request->directory['year'].'/'.$request->directory['month'].'/'.$request->filename;
            Storage::delete($pathToDelete);
        }
        
        return response()->json([
            'message' => 'Dokumen Rekam Medis telah dihapus!'
        ], 200);
    }
}