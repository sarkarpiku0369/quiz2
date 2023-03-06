<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\PrizeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BannerController;

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

Route::get('/', function () {
    return view('dashboard');
});

Route::get('/login', function () {
    return view('login');
});

Route::resource("user", UserController::class);
Route::get("user/signin", [UserController::class,"signin"]);
Route::resource("question", QuestionController::class);
Route::resource("prize", PrizeController::class);
Route::resource("banner", BannerController::class);
