<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudyMaterialController;
use App\Http\Controllers\LiveSessionController;
use App\Http\Controllers\EducatorController;
use App\Http\Controllers\VaccancyController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);
});



Route::post('/SignUp',[AuthController::class,'SignUp']);
Route::post('/login',[AuthController::class,'login']);


//products

Route::get("/StudyMaterial",[StudyMaterialController::class,'list']);
Route::get("/LiveSessions",[LiveSessionController::class,'list']);
Route::get("/Educators",[EducatorController::class,'list']);
Route::get("/Vacancies",[VaccancyController::class,'list']);

//user subscribing
Route::post("/User_material",[StudyMaterialController::class,'user_materials_list']);
Route::post("/User_Live_session",[LiveSessionController::class,'user_live_session']);

//FilterData
Route::get("/LiveSessions/{id}",[LiveSessionController::class,'Specific']);
Route::get("/StudyMaterial/{id}",[StudyMaterialController::class,'Specific']);
Route::get("/Educators/{id}",[EducatorController::class,'Specific']);


