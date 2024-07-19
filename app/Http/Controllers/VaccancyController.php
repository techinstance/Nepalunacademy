<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vacancies;

class VaccancyController extends Controller
{
    function list(){
        try{

            return Vacancies::all();
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error in Finding in Vacancy',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
