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

Route::group(['middleware' => 'api', 'prefix' => 'auth', 'namespace' => 'API\Auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['namespace' => 'API\V1', 'middleware' => 'auth:api'], function () {
    Route::post('upload', 'DocumentController@upload');
    Route::get('search', 'DocumentController@search');
    Route::get('month', 'DocumentController@month');
    Route::get('documents', 'DocumentController@documents');

    Route::get('patient-name', 'PatientController@getPatientName');
    Route::put('update-patient', 'PatientController@updatePatient');

    Route::get('form-number', 'DocumentController@getFormNumber');

    Route::get('open-document', 'DocumentController@openDocument');
    Route::get('download-document', 'DocumentController@downloadDocument');

    Route::put('update-record-date/{id}', 'DocumentController@updateRecordDate');

    Route::put('update-note', 'DocumentController@updateNote');

    Route::post('delete-record', 'DocumentController@deleteRecord');
});
