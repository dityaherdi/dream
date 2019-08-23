<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    public $incrementing = false;

    protected $fillable = ['patient_id', 'directory_id', 'filename', 'record_date'];

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
}
