<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\PrizeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\WinnerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [UserController::class, 'dashboard']);


Route::get('/dashboard', [UserController::class, 'dashboard']);
Route::post("user/signin", [UserController::class,"signin"]);
Route::get("user/signout", [UserController::class,"signout"]);
Route::resource("user", UserController::class);


Route::resource("question", QuestionController::class);
Route::resource("prize", PrizeController::class);
Route::resource("banner", BannerController::class);
Route::resource("winner", WinnerController::class);
