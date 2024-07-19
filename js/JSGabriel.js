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

/*prova*/
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene l'invio del modulo
  
  // Ottieni il valore selezionato dal menu a tendina
  const tipoAccesso = document.querySelector('select[name="tipo_accesso"]').value;
  console.log("Tipo di accesso selezionato:", tipoAccesso);
  
  // Ottieni email e password inseriti
  const emailInput = document.querySelector('input[name="email"]').value;
  const passwordInput = document.querySelector('input[name="pswd"]').value;
  console.log("Email inserita:", emailInput);
  console.log("Password inserita:", passwordInput);

  // Definisci email e password corrette
  const EMAIL_CORRETTA = 'utente@gmail.com';
  const PASSWORD_CORRETTA = 'password123'; // Cambia questa con la tua password corretta

  // Verifica se è selezionato "Utente" e controlla email e password
  if (tipoAccesso === 'utente') {
      if (emailInput === EMAIL_CORRETTA && passwordInput === PASSWORD_CORRETTA) {
          // Reindirizza alla pagina del profilo personale
          window.location.href = 'PaginaPersonale.html';
      } else {
          // Mostra un messaggio di errore
          console.log("Email o password errati.");
          document.getElementById('errorMessage').textContent = 'Email o password errati.';
      }
  } else {
      // Mostra un messaggio di errore se non è selezionato "Utente"
      console.log("Seleziona 'Utente' per accedere alla pagina del profilo personale.");
      document.getElementById('errorMessage').textContent = 'Seleziona "Utente" per accedere.';
  }
});


