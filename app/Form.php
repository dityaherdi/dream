<?php

namespace App;
use Uuid;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    public $incrementing = false;

    protected $fillable = [
        'number', 'name'
    ];

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
