@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row">
        <div class="col-md-6">
            <h2 class="text-dark">Edit Question</h2>
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

    <form action="{{route('question.update', $question->id)}}" method="POST">
        @method('PUT')
        @csrf

        <div class="row my-3">
            <div class="col-md-5">
                <label class="form-label">Select Lavel</label>
                <select class="form-control" name="level">
                    <option value="" <?php if($question->level == "") {echo "selected";}?>>Please Select</option>
                    <option value="1" <?php if($question->level == "1") {echo "selected";}?>>Level-1</option>
                    <option value="2" <?php if($question->level == "2") {echo "selected";}?>>Level-2</option>
                    <option value="3" <?php if($question->level == "3") {echo "selected";}?>>Level-3</option>
                    <option value="4" <?php if($question->level == "4") {echo "selected";}?>>Level-4</option>
                    <option value="5" <?php if($question->level == "5") {echo "selected";}?>>Level-5</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Question</label>
                    <input type="text" class="form-control" name="question" value="{{$question->question}}" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Option 1</label>
                    <input type="text" class="form-control" name="option_1"  value="{{$question->option_1}}" />
                </div>
            </div>
            <div class="col-md-8"></div>

            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Option 2</label>
                    <input type="text" class="form-control" name="option_2"  value="{{$question->option_2}}" />
                </div>
            </div>
            <div class="col-md-8"></div>

            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Option 3</label>
                    <input type="text" class="form-control" name="option_3"  value="{{$question->option_3}}" />
                </div>
            </div>
            <div class="col-md-8"></div>

            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Option 4</label>
                    <input type="text" class="form-control" name="option_4"  value="{{$question->option_4}}" />
                </div>
            </div>
            <div class="col-md-8"></div>
        </div>

        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">Correct Option</label>
                    <select class="form-control" name="correct_option">
                        <option value="" <?php if($question->correct_option == "") {echo "selected";}?>>Please Select</option>
                        <option value="1" <?php if($question->correct_option == "1") {echo "selected";}?>>Option 1</option>
                        <option value="2" <?php if($question->correct_option == "2") {echo "selected";}?>>Option 2</option>
                        <option value="3" <?php if($question->correct_option == "3") {echo "selected";}?>>Option 3</option>
                        <option value="4" <?php if($question->correct_option == "4") {echo "selected";}?>>Option 4</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </div>
    </form>

</div>

<script>
    $(".add").click(function(event) {
        $("table tbody").append(`
            <tr>
                <td style="width: 200px;">
                    <select class="form-control" name="level">
                        <option value="">Please Select</option>
                        <option value="1">Level-1</option>
                        <option value="2">Level-2</option>
                        <option value="3">Level-3</option>
                        <option value="4">Level-4</option>
                        <option value="5">Level-5</option>

                    </select>
                </td>
                <td>
                    <input class="form-control" type="text" name="question" />
                </td>
                <td style="vertical-align: middle; width: 35px;">
                    <button type="button" class="btn btn-sm btn-delete remove"><i class="fa fa-trash"></i></div>
                </td>
            </tr>
        `)
    })

    $(document).on("click", ".remove", function(event) {
        $(this).parent().parent().remove()
    })
</script>

<!-- /.container-fluid -->
@include("inc/footer")