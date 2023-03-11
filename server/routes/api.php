<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\PrizeController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\WinnerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post("/user/register", [UserController::class, 'register']);
Route::post("/user/verify", [UserController::class, 'verify']);
Route::post("/user/login", [UserController::class, 'login']);
Route::post("/user/isLogin", [UserController::class, 'isLogin']);

Route::group([
    'middleware'    =>  'auth:sanctum',
    'prefix'        =>  'user',
    'name'          =>  'user.'
], function () {
    

    Route::get("/is-authenticate", [UserController::class, 'isAuthenticate'])->name("isAuthenticate");
    Route::get("/logout", [UserController::class, 'logout']);
    Route::post("/user/verify", [UserController::class, 'verify']);
    
    Route::get("/{role?}", [UserController::class, 'index']);
});

Route::get("/question", [QuestionController::class, 'index'])->middleware("auth:sanctum");
Route::get("/all-prize", [PrizeController::class, 'get_all_prizes'])->middleware("auth:sanctum");
Route::get("/all-banner", [BannerController::class, 'get_all_banner'])->middleware("auth:sanctum");
Route::resource("/winner", WinnerController::class)->middleware("auth:sanctum");
