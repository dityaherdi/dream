<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="{{ asset('img/logo.ico') }}" type="image/x-icon">
  <title>DREAM - DOKUMEN ELEKTRONIK REKAM MEDIS RSIA PURI BUNDA</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
  <div id="app">
    <vue-app></vue-app>
  </div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>