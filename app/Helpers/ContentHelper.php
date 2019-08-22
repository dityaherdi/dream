<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class ContentHelper {

  public static function folderName($nrm)
  {
    // 11.11.11 => 111111
    return str_replace('.', '', $nrm);
  }

  public static function fileName($nrm, $name)
  {
    // '111111_NAMA_PASIEN_timestamp.pdf' << Saat ini digunakan
    // 'TAHUN-KEDATANGAN_111111_NAMA-PASIEN_timestamp.pdf' << Penambahan Tahun Kedatangan
    $name = strtoupper(str_replace(' ', '_', $name));
    return ContentHelper::folderName($nrm).'_'.$name.'_'.time().'.pdf';
  }

  public static function storeFile($request)
  {
    $folderName = ContentHelper::folderName($request['nrm']);
    $fileName = ContentHelper::fileName($request['nrm'], $request['name']);

    $exploded1 = explode(';', $request['docRm']);
    $exploded2 = explode(',', $exploded1[1]);
    $file = base64_decode($exploded2[1]);

    return Storage::put('public/'.$folderName.'/'.$fileName, $file);

    // return true;
  }
}