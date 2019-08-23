<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Directory extends Model
{
    public $incrementing = false;

    protected $fillable = ['nrm_folder', 'year_folder', 'month_folder'];

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
