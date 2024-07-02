const template =document.createElement('template')
template.innerHTML =` <header>
    <!-- Navbar -->
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
=======
    <nav class="navbar navbar-expand-lg  ">
>>>>>>> caf513a6fdf3eb6eca15247b6a73c2c2e0a2968a
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img class="logo"
              src="img/Logo.png"
              alt="Logo"
              style="max-height: 120px; border-radius: 50%; "
            />
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Destinazioni</a>
                <div class="dropdown-menu">
                    <div class="container" style="max-width: 350px;">
                        <img src="img/Logo.png" class="destHead img-fluid" alt="">
                        <div class="row">
                        </div>
                        <div class="row">
                            <div class="col">
                                cacacacacaca
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item offers">
              <a class="nav-link" href="#">Offerte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Chi Siamo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Partner</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contatti</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Accesso</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>`
document.body.appendChild(template.content)