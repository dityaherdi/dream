<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ContentHelper {

  public static function folderNRM($nrm)
  {
    // 11.11.11 => 111111
    return str_replace('.', '', $nrm);
  }

  public static function folderYear($date) {
    // 2003
    return Carbon::parse($date)->year;
  }

  public static function folderMonth($date) {
    // 1 - 12
    return Carbon::parse($date)->month;
  }

  public static function fileName($nrm, $name, $i)
  {
    // '111111_NAMA_PASIEN_timestamp.pdf'
    $name = strtoupper(str_replace(' ', '_', $name));
    return ContentHelper::folderNRM($nrm).'_'.$name.'_'.$i.'_'.time().'.pdf';
  }

  public static function storeFile($request)
  {
    $folderNRM = ContentHelper::folderNRM($request['nrm']);
    $folderYear = ContentHelper::folderYear($request['date']);
    $folderMonth = ContentHelper::folderMonth($request['date']);

    for ($i=0; $i <count($request['docRm']); $i++) {
      $exploded1 = explode(';', $request['docRm'][$i]);
      $exploded2 = explode(',', $exploded1[1]);
      $file = base64_decode($exploded2[1]);
      $fileName = ContentHelper::fileName($request['nrm'], $request['name'], $i);

      Storage::put('public/'.$folderNRM.'/'.$folderYear.'/'.$folderMonth.'/'.$fileName, $file);
    }
    
    return true;
  }
}