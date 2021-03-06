<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            // $table->bigIncrements('id');
            $table->uuid('id')->primary();
            $table->string('patient_id');
            $table->string('directory_id');
            $table->string('filename');
            $table->string('form_number')->nullable()->default(null);
            $table->string('form_name')->nullable()->default(null);
            $table->text('note')->nullable()->default(null);
            $table->datetime('record_date');
            $table->datetime('deleted_date')->nullable()->default(null);
            $table->timestamps();

            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('directory_id')->references('id')->on('directories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
}
