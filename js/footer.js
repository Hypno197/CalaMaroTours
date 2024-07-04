const template2 =document.createElement('template')
template.innerHTML =`
<footer class="footer text-center text-lg-start">

        <div class="container container-footer p-4 pb-0">
            
            <div class="row rowG">

            <div class="footer-column col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <a href="Home.html">
                    <img src="img/Logo.png" alt="Logo Cala Marò" width="200px" height="200px">
                </a>
            </div>
            <div class="footer-column col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <span class="text-uppercase mb-4 font-weight-bold">Dati aziendali</span>
                <p>Nome Azienda: <b>Cala Marò TO - S.r.l.</b></p>
                <p>Indirizzo Sede Legale: <b>Via Manfredonia, 1 - 71121 Foggia (FG)</b></p>
                <p>Telefono: <b>+39 123-456-7890</b></p>
                <p>E-mail: <b>azienda-to@calamaro.it</b></p>
            </div>
            <div class="footer-column col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <span class="text-uppercase mb-4 font-weight-bold spanG">Help section</span>
                <ul class="link-list">
                    <li><a href="FAQ.html" class="text-white">FAQ</a></li>
                    <li><a href="ChiSiamo.html" class="text-white">Chi siamo</a></li>
                    <li><a href="Contatti.html" class="text-white">Contatti</a></li>
                    <li><a href="LavoraConNoi.html" class="text-white">Lavora con noi</a></li>
                    <li><a href="Assistenza.html" class="text-white">Assistenza</a></li>
                    <li><a href="CondizioniGenerali.html" class="text-white">Condizioni generali</a></li>
                    <li><a href="CookiePolicy.html" class="text-white">Cookie Policy</a></li>
                    <li><a href="PrivacyPolicy.html" class="text-white">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-column col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <span class="text-uppercase mb-4 font-weight-bold">Social</span>

                    <div class="social-links">
                        <a href="https://www.facebook.com/tuapagina" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-facebook"></i>
                            Facebook
                        </a><br>
                        <a href="https://www.instagram.com/tuoaccount" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-instagram"></i>
                            Instagram
                        </a><br>
                        <a href="https://www.tiktok.com/@tuoaccount" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-tiktok"></i>
                            TikTok
                        </a><br>
                        <a href="https://www.youtube.com/tuocanale" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-youtube"></i>
                            YouTube
                        </a><br>
                        <a href="https://github.com/tuoprofilo" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a><br>
                        <a href="https://plus.google.com/tuoprofilo" target="_blank" rel="noopener noreferrer" class="social-icons">
                            <i class="fab fa-google"></i>
                            Google
                        </a>
                    </div>
                </div>
        </div>
        <div class="container text-center mt-3">
            <p>&copy; 2024 Cala Marò TO - S.r.l. Tutti i diritti riservati.</p>
        </div>
        </footer>
`
document.body.appendChild(template.content)