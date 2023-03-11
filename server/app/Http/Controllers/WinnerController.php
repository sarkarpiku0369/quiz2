<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Winner;
use App\Models\Prize;
use App\Models\User;
use Validator;
use Auth;

class WinnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $winners =  Winner::paginate(10);
        $winner_list = [];

        for($i = 0 ; $i < count($winners) ; $i++) {
            $winners[$i]->player_name = User::find($winners[$i]->user_id)->name;
            $winners[$i]->prize_name = Prize::find($winners[$i]->prize_id)->name;
        }

        return view("Winner.index", ["winners" => $winners]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $input = $request->all();

        $validation = Validator::make($input, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'prize_id' => 'required'
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }


        $winner = Winner::create([
            "user_id" => Auth::user()->id,
            "prize_id" => $request->input('prize_id'),
            'name' => $request->input('name'),
            "phone" => $request->input('phone'),
            "email" => $request->input('email'),
        ]);

        if($winner) {
            return response(["winner" => $winner], 200);
        }
        else {
            return response([], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Winner::destroy($id);
        return redirect()->back();
    }
}
