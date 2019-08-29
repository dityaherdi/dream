<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Uuid;
class Directory extends Model
{
    public $incrementing = false;

    protected $fillable = ['nrm', 'year', 'month'];

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

    public function records()
    {
        return $this->belongsTo('App\Record');
    }
}
