@include("inc/header")

<!-- Begin Page Content -->
<div class="container-fluid mb-5">

    <div class="row mb-3">
        <div class="col-md-6">
            <h2 class="text-dark">Prizes</h2>
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
                    <th style="text-align: left;">Prize Name</th>
                    <th style="text-align: left;">Active</th>
                    <th style="text-align: left;">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($prizes as $prize)
                    <tr>
                        <td style="text-align: left;">{{$prize->name}}</td>
                        <td style="text-align: left;">{{$prize->active}}</td>
                        <td style="text-align: left;">
                            <div class="btn-group" role="group">
                                <a href="{{route('prize.edit', $prize->id)}}" class="btn btn-sm btn-outline-secondary mx-1"><i class="fa fa-pen"></i></a>
                                <form action="{{route('prize.destroy', $prize->id)}}" method="POST">
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
        {{ $prizes->links('pagination::bootstrap-4') }}
    </div>
</div>

<!-- /.container-fluid -->
@include("inc/footer")