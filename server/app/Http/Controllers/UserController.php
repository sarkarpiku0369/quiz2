<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use \Illuminate\Http\Response;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OTPVerification;
use Validator;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $role = $request->query("role");
        
        if($role == null){
            return response(["users" => User::all()]);
        }
        else {
            return view("Player.index", ["users" => User::where("role", strtoupper($role))->paginate(10)]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        //
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prize  $prize
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        // return view("User.edit", ["prize" => $prize]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = Auth::user();
        $user->email = $request->email ? $request->email : $user->email;
        $user->name = $request->name ? $request->name : $user->name;
        $user->save();
        return response(["user" => $user], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function register (Request $request) {
        $input = $request->all();

        $validation = Validator::make($input, [
            'role' => "required",
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }

        $otp = mt_rand(1111,9999);

        $user = User::create([
            "role" => $request->role,
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
            "otp" => $otp
        ]);

        if($user) {

            Mail::to($user)->send(new OTPVerification($user->name, $otp));

            return response(["user" => $user]);
        }
        else {
            return response(["user" => null], 500);
        }
    }

    public function login(Request $request) {

        $input = $request->all();

        $validation = Validator::make($input, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }

        $user = User::where(['email' => $input["email"], "password" => $input["password"]])->first();

        if($user) {
            $otp = mt_rand(1111,9999);

            $user->otp = $otp;
            $user->save();

            Mail::to($user)->send(new OTPVerification($user->name, $otp));

            return response(["user" => $user]);
        }
        else {
            return response(["error" => "Invalid email address or Password"], 401);
        }
    }

    public function signin (Request $request) {
        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();

        if($user) {
            if ($email == $user->email && $password == $user->password) {

                $request->session()->put('loggedin', true);
                return redirect("/");
            }
            else {
                return view("login_error");
            }
        }
        else {
            return view("login_error");
        }
    }

    public function signout (Request $request) {
        $request->session()->forget('loggedin');
        return redirect('/');
    }

    public function verify (Request $request) {
        $otp = $request->otp;
        $email = $request->email;

        if($otp) {
            $user = User::where("email", $email)->first();
            
            if($user && ($user->otp == $otp)) {
                $user->otp = "";
                $user->save();

                $token = $user->createToken('trimmeapp');

                return response(["user" => $user, 'token' => $token->plainTextToken], 200);
            }
            else {
                return response(["user" => null, "error" => "Invalid OTP"], 401);
            }
        }
        else {
            return response(["user" => null], 400);
        }
    }

    public function dashboard(Request $request) {
        if($request->session()->get('loggedin')) {
            return view("dashboard");
        }
        else {
            return view('login');
        }
    }
    
    public function change_password() {
        $user = Auth::user();
        $otp = mt_rand(1111,9999);

        $user->otp = $otp;
        $user->save();

        Mail::to($user)->send(new OTPVerification($user->name, $otp));
        return response(["user" => $user], 200);
    }

    public function reset_password(Request $request) {
        $user = Auth::user();
        
        if($user->otp == $request->otp) {
            $user->password = $request->password;
            $user->otp = "";
            $user->save();
            return response(["user" => $user], 200);
        }
        else {
            return response(["error" => "Invalid OTP"], 401);
        }
                

    }

    public function isAuthenticate () {
        return response(["user" => User::find(Auth::user()->id)], 200);
    }
    
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        
        return response([], 200);
    }
}
