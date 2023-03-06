<!-- Sidebar -->
<div class="my-sidebar-container">
    <ul class="navbar-nav sidebar sidebar-dark accordion my-sidebar" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{url('/')}}">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-2">Quiz Dashboard<sup></sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <a class="nav-link" href="{{url('/')}}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <!-- Nav Item - Play List -->
        <li class="nav-item">
            <a class="nav-link" href="{{url('/user?role=USER')}}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Player List</span>
            </a>
        </li>

        <!-- Nav Item - Winner List -->
        <li class="nav-item">
            <a class="nav-link" href="{{url('/winner')}}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Winner List</span>
            </a>
        </li>

        <!-- Nav Item - Banner -->
        <li class="nav-item">
            <a class="nav-link" href="{{url('/banner')}}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Banner</span>
            </a>
        </li>
        
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Question</span>
            </a>

            <div id="collapseOne" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="{{url('/question')}}">Question List</a>
                    <a class="collapse-item" href="{{url('/question/create')}}">Create Question</a>
                </div>
            </div>
        </li>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Prize</span>
            </a>

            <div id="collapseThree" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="{{url('/prize')}}">Prize List</a>
                    <a class="collapse-item" href="{{url('/prize/create')}}">Create Prize</a>
                </div>
            </div>
        </li>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Player</span>
            </a>

            <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="{{url('/user?role=USER')}}">Player List</a>
                </div>
            </div>
        </li>
    </ul>
</div>
<!-- End of Sidebar -->