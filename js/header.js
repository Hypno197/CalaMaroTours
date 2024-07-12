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
                      <div class="container-fluid destCont text-center" >
                          <img src="img/destinazioni.jpg" class="destHead img-fluid" style="width:100%" alt="">
                          <a href="destinazioni.html" class="btn btn-outline-secondary destBtn" >LE DESTINAZIONI</a>
                                                   <div class="col mt-3">
                               <div class="row">
                                <div class="col-8">
                                  <ul class="listaDest">
                                    <li><a href="Preventivo.html" class="">Roma</a></li>
                                    <li><a href="Preventivo.html" class="">Gallipoli</a></li>
                                    <li><a href="Preventivo.html" class="">Busto Arsizio</a></li>
                                    <li><a href="Preventivo.html" class="">Venezia</a></li>
                                </ul>
                                </div>
                                <div class="col-4  border-start statoDest" style="font-size: x-large;"><br>Italia</div>
                               </div>
                               <div class="row mt-3">
                                 <div class="col-4  border-end statoDest" style="padding-top: 20px; font-size: x-large;">Egitto</div>
                                 <div class="col-8 ">
                                   <ul class="listaDest">
                                     <li><a href="Preventivo.html" class="">Sharm-El-Sheikh</a></li>
                                     <li><a href="Preventivo.html" class="">Il Cairo</a></li>
                                     <li><a href="Preventivo.html" class="">Luxor</a></li>
                                    </ul>
                                  </div>
                                </div>
                               <div class="row mt-3">
                                <div class="col-8">
                                  <ul class="listaDest">
                                    <li><a href="Preventivo.html" class="">Barcellona</a></li>
                                    <li><a href="Preventivo.html" class="">Malaga</a></li>
                                    <li><a href="Preventivo.html" class="">Madrid</a></li>
                                    <li><a href="Preventivo.html" class="">Sevilla</a></li>
                                </ul>
                                </div>
                                <div class="col-4 border-start statoDest" style="font-size: x-large;"> <br> Spagna</div>
                               </div>
                      </div>
                  </div>
              </li>
              <li class="nav-item offers">
                <a class="nav-link" href="Preventivo.html">Offerte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ChiSiamo.html">Chi Siamo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Partner</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Contatti2.html">Contatti</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="FAQ.html">FAQ</a>
              </li>
            </ul>
          </div>
  
          <div class="d-flex align-items-center">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="PaginaAccesso.html">Accesso</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>
`
document.body.appendChild(template.content)