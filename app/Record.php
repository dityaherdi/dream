<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Uuid;

class Record extends Model
{
    public $incrementing = false;

    protected $fillable = ['patient_id', 'directory_id', 'filename', 'form_number', 'form_name', 'note', 'record_date'];

    /**
    *  Setup model event hooks for UUID
    */
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id = (string) Uuid::generate(4);
        });
    }

    public function patient()
    {
        return $this->belongsTo('App\Patient');
    }

    public function directory()
    {
        return $this->belongsTo('App\Directory');
    }
}
