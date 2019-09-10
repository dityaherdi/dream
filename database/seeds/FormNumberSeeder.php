<?php

use Illuminate\Database\Seeder;

use Webpatser\Uuid\Uuid;
use App\Form;

class FormNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/data/form-sample.json');
        $data = json_decode(preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json), true);

        $forms = [];
        foreach ($data as $d) {
            $forms[] = [
                'id' => Uuid::generate(4),
                'number' => $d['number'],
                'name' => $d['name']
            ];
        }

        DB::table('forms')->insert($forms);
    }
}
