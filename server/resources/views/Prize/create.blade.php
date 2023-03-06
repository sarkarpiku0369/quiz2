@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row">
        <div class="col-md-6">
            <h2 class="text-dark">Add Prize</h2>
        </div>
    </div>

    <form action="{{route('prize.store')}}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="name">Prize Name</label>
                    <input type="text" class="form-control" name="name" />
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="name">Active</label>
                    <select class="form-control" name="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
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