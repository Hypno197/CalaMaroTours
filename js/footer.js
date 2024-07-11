const template2 =document.createElement('template')
template.innerHTML =`
<footer class="footer mt-auto py-3">

        <div class="container-fluid text-center">
            
            <div class="row">

                <div class="col-12 col-lg-1 footer-col">
                    <a href="Home.html">
                        <img style="border-radius: 50%;" src="img/Logo.png" alt="Logo Cala Marò" width="100px" height="100px">
                    </a>
                </div>

                <div class="col-12 col-sm-6 col-lg-2 footer-col">
                    <span class="text-uppercase mb-4 font-weight-bold text-center spanG">Dati aziendali</span>
                    <p>Nome Azienda: <b>Cala Marò TO - S.r.l.</b></p>
                    <p>Indirizzo Sede Legale: <b>Via Manfredonia, 1 - 71121 Foggia (FG)</b></p>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 footer-col">
                    <span class="text-uppercase mb-4 font-weight-bold text-center spanG">Contatti azienda</span>
                    <p>Telefono: <b>+39 123-456-7890</b></p>
                    <p>E-mail: <b>azienda-to@calamaro.it</b></p>
                </div>

                

                <div class="col-12 col-lg-3 footer-col">
                    <div class="row">
                        <div class="col text-center ms-3">
                            <h4>Help section</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-6">                      
                    <ul class="link-list">
                        <li><a href="FAQ.html" class="text-white">FAQ</a></li>
                        <li><a href="ChiSiamo.html" class="text-white">Chi siamo</a></li>
                        <li><a href="Contatti2.html" class="text-white">Contatti</a></li>
                        <li><a href="Contatti2.html" class="text-white">Lavora con noi</a></li>
                    </ul>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6">
                            <ul class="link-list">
                                <li><a href="Assistenza.html" class="text-white">Assistenza</a></li>
                                <li><a href="CondizioniGenerali.html" class="text-white">Condizioni generali</a></li>
                                <li><a href="CookiePolicy.html" class="text-white">Cookie Policy</a></li>
                                <li><a href="PrivacyPolicy.html" class="text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm- col-lg-3">
            
                <div class="row">
                    <h4>Social</h4>
                </div>
                <div class="row">
                    <div class="col-4 social-links text-center">
                            <a href="https://www.facebook.com/tuapagina" target="_blank" rel="noopener noreferrer" class="social-icons">
                                <i class="fab fa-facebook"></i><br>
                                Facebook
                            </a><br>
                        </div>
                        <div class="col-4 social-links text-center">
                            <a href="https://www.instagram.com/tuoaccount" target="_blank" rel="noopener noreferrer" class="social-icons">
                                <i class="fab fa-instagram"></i><br>
                                Instagram
                            </a><br>
                        </div>
                        <div class="col-4 social-links text-center">
                            <a href="https://www.tiktok.com/@tuoaccount" target="_blank" rel="noopener noreferrer" class="social-icons">
                                <i class="fab fa-tiktok"></i><br>
                                TikTok
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="container text-center mt-3">
            <p>&copy; 2024 Cala Marò TO - S.r.l. Tutti i diritti riservati.</p>
        </div>
    </footer>
`
document.body.appendChild(template.content)