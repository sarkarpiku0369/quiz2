<?php

namespace App\Http\Controllers;

use App\Models\Prize;
use Illuminate\Http\Request;

class PrizeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("Prize.index", ["prizes" => Prize::paginate(10)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('prize.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // $imageName = time().'.'.$request->image->extension();

        // // Public Folder
        // $request->image->move(public_path('images'), $imageName);


        $prize = Prize::create([
            "name"      => $request->name,
            "active"    => $request->active,
            // "image"     => $imageName
        ]);

        return back()->with('success', 'Prize Added Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prize  $prize
     * @return \Illuminate\Http\Response
     */
    public function show(Prize $prize)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prize  $prize
     * @return \Illuminate\Http\Response
     */
    public function edit(Prize $prize)
    {
        return view("Prize.edit", ["prize" => $prize]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prize  $prize
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prize $prize)
    {

        // $imageName = time().'.'.$request->image->extension();

        // // Public Folder
        // $request->image->move(public_path('images'), $imageName);

        $prize->name   = $request->name;
        $prize->active = $request->active;
        // $prize->image  = $imageName;

        $prize->save();

        return back()->with('success', 'Prize Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prize  $prize
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       Prize::destroy($id);
       return back()->with('success', 'Prize Deleted Successfully');
    }
}
