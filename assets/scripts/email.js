function sendEmail(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    emailjs.sendForm('service_paccnmf', 'template_pqb568o', event.target, 'ptNCneXPkerPcOMwE')
    .then((result) => {
        alert("Wiadomość wysłana!");
    }, (error) => {
        alert("Błąd: " + error.text);
    });
}
