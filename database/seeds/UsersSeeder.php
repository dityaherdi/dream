<?php

use Illuminate\Database\Seeder;

use Webpatser\Uuid\Uuid;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => Uuid::generate(4),
            'name' => 'Administrator',
            'email' => 'admin@mail.com',
            'password' => bcrypt('123456')
        ]);
    }
}
