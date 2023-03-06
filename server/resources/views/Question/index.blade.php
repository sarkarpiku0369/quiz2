@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row mb-3">
        <div class="col-md-6">
            <h2 class="text-dark">Questions</h2>
        </div>
        <div class="col-md-6">
            @if ($message = Session::get('success'))
                <div class="alert alert-success alert-block" style="float: right;">
                    <button type="button" class="close" data-dismiss="alert" style="margin-left: 20px;">×</button>	
                        <strong>{{ $message }}</strong>
                </div>
            @endif
        </div>
    </div>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th style="text-align: left;">Level</th>
                    <th style="text-align: left;">Question</th>
                    <th style="text-align: left;">Option 1</th>
                    <th style="text-align: left;">Option 2</th>
                    <th style="text-align: left;">Option 3</th>
                    <th style="text-align: left;">Option 4</th>
                    <th style="text-align: left;">Correct Option</th>
                    <th style="text-align: left;">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($questions as $question)
                    <tr>
                        <td style="text-align: left;">{{$question->level}}</td>
                        <td style="text-align: left;">{{$question->question}}</td>
                        <td style="text-align: left;">{{$question->option_1}}</td>
                        <td style="text-align: left;">{{$question->option_2}}</td>
                        <td style="text-align: left;">{{$question->option_3}}</td>
                        <td style="text-align: left;">{{$question->option_4}}</td>
                        <td style="text-align: left;">{{$question->correct_option}}</td>
                        <td style="text-align: left;">
                            <div class="btn-group" role="group">
                                <a href="{{route('question.edit', $question->id)}}" class="btn btn-sm btn-outline-secondary mx-1"><i class="fa fa-pen"></i></a>
                                <form action="{{route('question.destroy', $question->id)}}" method="POST">
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa fa-trash"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="row justify-content-center">
        {{ $questions->links('pagination::bootstrap-4') }}
    </div>
</div>

<!-- /.container-fluid -->
@include("inc/footer")