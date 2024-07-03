const template =document.createElement('template')
template.innerHTML =` <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand mt-2 mt-lg-0" href="Home.html">
            <img class="logo"
              src="img/Logo.png"
              alt="Logo"
              style="max-height: 120px; border-radius: 50%; "
            />
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="Home.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Destinazioni</a>
                <div class="dropdown-menu">
                    <div class="container dest" >
                        <img src="img/destinazioni.jpg" class="destHead img-fluid" alt="">
                        <a href="destinazioni.html" class="btn btn-outline-secondary destBtn" >DESTINAZIONI</a>
                                                 <div class="col">
                              <div class="card">
                                  <img src="img/colosseo.jpg" class="card-img-top" alt="immagine">
                                  <div class="card-body">
                                      <h5 class="card-title">Italia</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="col ">
                              <div class="card">
                                  <img src="img/immagine.jpg" class="card-img-top" alt="immagine">
                                  <div class="card-body">
                                      <h5 class="card-title">Le Maldive</h5>
                               
              
              
                                  </div>
                              </div>
                          </div>
                          <div class="col ">
                              <div class="card">
                                  <img src="img/egitto.jpg" class="card-img-top" alt="immagine">
                                  <div class="card-body">
                                      <h5 class="card-title">Destinazione</h5>
                                     
              
              
                                  </div>
                              </div>
                          </div>
                          <div class="col ">
                              <div class="card">
                                  <img src="img/giappone.jpg" class="card-img-top" alt="immagine">
                                  <div class="card-body">
                                      <h5 class="card-title">Destinazione</h5>
                                 
              
                                  </div>
                              </div>
                          </div>
                    </div>
                </div>
            </li>
            <li class="nav-item offers">
              <a class="nav-link" href="#">Offerte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ChiSiamo.html">Chi Siamo</a>
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
        </div>

        <div class="d-flex align-items-center">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          

            <li class="nav-item">
              <a class="nav-link" href="#">Accesso</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>
`
document.body.appendChild(template.content)