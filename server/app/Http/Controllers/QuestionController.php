<?php

namespace App\Http\Controllers;
use App\Models\Question;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $level = $request->query("level");

        if($level) {
            if($level == 1) {
                return response(["questions" => $this->get_random_question(6, $level)]);
            }
            else {
                return response(["questions" => $this->get_random_question(12, $level)]);
            }
        }
        else {
            return view("Question.index", ["questions" => Question::paginate(10)]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {        
        return view('Question/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $question = Question::create([
            'level'             => $request->level,
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'correct_option'   => $request->correct_option,
        ]);

        return back()->with('success', 'Question Added Successfully');
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
    public function edit(Question $question)
    {
        return view("Question.edit", ["question" => $question]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        $question->level          = $request->level;
        $question->question       = $request->question;
        $question->option_1       = $request->option_1;
        $question->option_2       = $request->option_2;
        $question->option_3       = $request->option_3;
        $question->option_4       = $request->option_4;
        $question->correct_option = $request->correct_option;

        $question->save();
        return back()->with('success', 'Question Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Question::destroy($id);
        return back()->with('success', 'Question Deleted Successfully');
    }

    public function get_random_question($total, $level) {
        $questions = Question::where("level", $level)->get()->all();
        shuffle($questions);

        $selected_questions = array_slice($questions, 1, $total);

        return $selected_questions;
    }
}
