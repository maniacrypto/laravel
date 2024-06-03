<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PracticeController extends Controller
{
    public function index(Request $request){
       
        $user=User::find(1);
        dd($user);
    }
    //
}
