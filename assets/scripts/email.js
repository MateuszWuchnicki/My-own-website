function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    
    emailjs.sand('service_paccnmf', 'template_pqb568o', parms).then(alert("Wiadomość została wysłana!"))
}
