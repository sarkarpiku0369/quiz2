@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row mb-3">
        <div class="col-md-6">
            <h2 class="text-dark">Banners</h2>
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

    <!-- Button to Open the Modal -->
    <button type="button" class="btn btn-success mb-4" data-toggle="modal" data-target="#myModal">Add Modal</button>

    <div class="row">
        @foreach($banners as $banner)
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row justify-content-end">
                            <div class="btn-group" role="group">
                                <form action="{{route('banner.destroy', $banner->id)}}" method="POST">
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-sm btn-outline-secondary"><i class="fa fa-trash"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <img src="{{ asset('/banners') }}/<?php echo $banner->image ?>" style="height: 200px; width: 100%;" />
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <form action="{{route('banner.store')}}" method="POST" enctype="multipart/form-data">
            @csrf
            
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Upload Banner Image</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div id="preview"></div>
                        <div class="form-group">
                            <input type="file" name="banner" class="form-control" />
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success">Submit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </form>
    </div>
</div>

<script>
    $("input[name='banner']").change(function(event) {
        $("#preview").empty()

        $("#preview").append(`
            <img src="${URL.createObjectURL(event.target.files[0])}" style="height: 200px; width: 100%;" />
        `)
        
    })
</script>

<!-- /.container-fluid -->
@include("inc/footer")