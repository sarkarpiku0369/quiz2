<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Admin</title>

    <!-- Custom fonts for this template-->
    <link href="{{asset('vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/css/bootstrap-select.min.css">
    <!-- Custom styles for this template-->
    <link href="{{asset('css/sb-admin-2.min.css')}}" rel="stylesheet">

    <script src="{{asset('vendor/jquery/jquery.min.js')}}"></script>

    <style>
        table, th, td {
            /* border: 1px solid black !important; */
            color: black;
        }
        
        .my-sidebar-container {
            background-color: #44c657;
        }

        .my-sidebar {
            background-color: rgb(0, 0, 0, 0.6) !important;
            font-weight: bold !important;
          	height: 100% !important;
        }

        .page-item.active .page-link {
            z-index: 3;
            color: #fff !important;
            background-color: #44c657 !important;
            border-color: #44c657 !important;
        }

        .page-link {
            position: relative;
            display: block;
            padding: 0.5rem 0.75rem;
            margin-left: -1px;
            line-height: 1.25;
            color: #44c657 !important;
            background-color: #fff;
            border: 1px solid #dddfeb;
        }
    </style>
</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        @include("inc/sidebar")

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

            @include("inc/navbar")