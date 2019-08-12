<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
  @include('master.navbar')
  <div class="container">
    @include('components.searchForm')
    <div class="columns">
      <div class="column">
        <h3 class="title">
          Upload File Rekam Medis
        </h3>
        <p class="subtitle">
          <i>*File yang diupload harus format .pdf</i>
        </p>

        <div class="field">
          <label class="label">Nomor Rekam Medis</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="text" placeholder="Text input" required>
            <span class="icon is-left">
              <i class="fas fa-address-card"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Nama</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="text" placeholder="Text input" required>
            <span class="icon is-left">
              <i class="fas fa-font"></i>
            </span>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
              <div class="file is-normal is-boxed has-name is-primary is-centered">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Upload Dokumen
                    </span>
                  </span>
                  <span class="file-name">
                    Screen Shot 2017-07-29 at 15.54.25.png
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="column">
            <a class="button is-link is-normal has-margin-bottom-15 is-fullwidth">
              <span class="icon has-margin-right-5">
                <i class="fas fa-save"></i>
              </span>
              Simpan
            </a>
            <div class="box is-normal">
              <p>Tampilkan Nama File dan Folder</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
          <h1 class="title">
            E-Doc Library Rekam Medis
          </h1>
          <p class="subtitle">
            <i>*File </i>
          </p>
          <nav class="panel">
            <p class="panel-heading">
              Rekam Medis
            </p>
            {{-- <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div> --}}
            {{-- <p class="panel-tabs">
              <a class="is-active">all</a>
              <a>public</a>
              <a>private</a>
              <a>sources</a>
              <a>forks</a>
            </p> --}}
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            
            <div class="panel-block">
              <button class="button is-primary is-outlined is-fullwidth">
                reset all filters
              </button>
            </div>
          </nav>
      </div>
    </div>
  </div>
  @include('master.footer')
</body>
</html>