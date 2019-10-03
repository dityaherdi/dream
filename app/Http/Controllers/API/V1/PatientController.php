<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Patient;
use DB;

class PatientController extends Controller
{
    public function getPatientName(Request $request)
    {
        $patient = Patient::where('nrm', $request->nrm)->first();
        
        if ($patient) {
            return response()->json([
                'result' => $patient->name,
            ]);
        } else {
            $sanataPatient = DB::connection('sqlsrv')
                ->table('mPasien')
                ->select('NamaPasien', 'NamaAlias')
                ->where(['NRM' => $request->nrm])
                ->get();
            
            if (sizeof($sanataPatient) != 0) {
                if ($sanataPatient[0]->NamaAlias) {
                    $sanataPatient = $sanataPatient[0]->NamaAlias;
                } else {
                    $sanataPatient = $sanataPatient[0]->NamaPasien;
                }
                
                return response()->json([
                    'result' => $sanataPatient
                ]);
            }
        }

        return response()->json([
            'result' => null
        ]);
    }

    public function updatePatient(Request $request)
    {
        $patient = Patient::findOrFail($request->id);
        $patient->update([
            'nrm' => $request->nrm,
            'name' => $request->name
        ]);

        return response()->json([
            'result' => '',
            'message' => 'Data Pasien '.$request->nrm.' berhasil diperbarui!'
        ]);
    }
}
