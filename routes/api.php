<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['namespace' => 'API\V1'], function () {
    Route::post('upload', 'DocumentController@upload');
    Route::get('search', 'DocumentController@search');
    Route::get('month', 'DocumentController@month');
    Route::get('documents', 'DocumentController@documents');

    Route::get('patient-name', 'PatientController@getPatientName');
    Route::put('update-patient', 'PatientController@updatePatient');

    Route::get('form-number', 'DocumentController@getFormNumber');

    Route::get('open-document', 'DocumentController@openDocument');

    Route::put('update-record-date/{id}', 'DocumentController@updateRecordDate');

    // test database sanata
    Route::get('sanata', 'DocumentController@dataSanata');
});
