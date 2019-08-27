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
        // return $request->all();
        // return Content::storeFile($request->all());
        
        if (Content::storeFile($request->all())) {
            return response()->json([
                // 'data' => $request->all(),
                'message' => 'Hi, your code is working great...!'
            ]);
        }

        return response()->json([
            'message' => 'Error, upload failed...'
        ]);
    }
}
