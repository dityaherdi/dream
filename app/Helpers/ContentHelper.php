<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Patient;
use App\Directory;
use App\Record;

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

  public static function capitalizeEachWord($string)
  {
    return ucwords($string);
  }
}