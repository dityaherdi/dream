<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Helpers\ContentHelper as Content;

class DocumentController extends Controller
{
    public function upload(Request $request)
    {
        if (Content::storeFile($request->all())) {
            return response()->json([
                'data' => $request->all(),
                'message' => 'Hi, your code is working great...!'
            ]);
        }
    }
}
