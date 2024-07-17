<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vacancies;

class VaccancyController extends Controller
{
    function list(){
        return Vacancies::all();
    }
}
