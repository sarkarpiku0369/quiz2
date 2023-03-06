@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row">
        <div class="col-md-6">
            <h2 class="text-dark">Add Prize</h2>
        </div>
    </div>

    <form action="{{route('prize.update', $prize->id)}}" method="POST" enctype="multipart/form-data">
        @method("PUT")
        @csrf

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="name">Prize Name</label>
                    <input type="text" class="form-control" name="name" value="{{$prize->name}}" />
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="name">Active</label>
                    <select class="form-control" name="active">
                        <option value="yes" <?php if($prize->active == "yes") {echo "selected";}?>>Yes</option>
                        <option value="no" <?php if($prize->active == "no") {echo "selected";}?>>No</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6"></div>

            <div class="col-md-2">
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Save" />
                </div>
            </div>
        </div>
    </form>

</div>

<!-- /.container-fluid -->
@include("inc/footer")