/*PAGINA DI ACCESSO*/
document.getElementById('tipo_utente').addEventListener('change', function() {
    const utenteFields = document.getElementById('utente-fields');
    const aziendaFields = document.getElementById('azienda-fields');
    if (this.value === 'utente') {
      utenteFields.classList.remove('hidden');
      aziendaFields.classList.add('hidden');
    } else if (this.value === 'azienda') {
      aziendaFields.classList.remove('hidden');
      utenteFields.classList.add('hidden');
    } else {
      utenteFields.classList.add('hidden');
      aziendaFields.classList.add('hidden');
    }
  });

  /*PAGINA PERSONALE*/
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const overlay = document.getElementById("overlay");
    const fileInput = document.getElementById("fileInput");
    const uploadImage = document.getElementById("uploadImage");

    if (!overlay || !fileInput || !uploadImage) {
        console.error("Element not found:", { overlay, fileInput, uploadImage });
        return;
    }

    overlay.addEventListener("click", function() {
        console.log("Overlay clicked");
        fileInput.click();
    });

    fileInput.addEventListener("change", function(event) {
        console.log("File input changed");
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                console.log("File loaded");
                uploadImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
