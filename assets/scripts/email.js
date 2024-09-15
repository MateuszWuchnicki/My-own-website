const form = document.querySelector('form');
const nameImput = document.getElementById("name");
const emailImput = document.getElementById("email");
const phoneImput = document.getElementById("phone");
const subjectImput = document.getElementById("subject");
const messageImput = document.getElementById("message");
const alertElement = document.querySelector('.alert');


const serviceID = 'service_hup7nfz';
const templateID = 'template_i6gg27k';
const publicKey = '8_Syl3YJmNfuIGuei';


emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        name: nameImput.value,
        user_email: emailImput.value,
        phone: phoneImput.value,
        subject: subjectImput.value,
        message: messageImput.value
    };
    emailjs.send(serviceID, templateID, inputData).then(
        () => {
            nameImput.value = '';
            emailImput.value = '';
            phoneImput.value = '';
            subjectImput.value = '';
            messageImput.value = '';
            alertElement.textContent = "Wiadomość została wysłana!";
            alertElement.style.color = "#1fc01f"; 
        },
        (error) => {
            alertElement.textContent = "Wysyłanie wiadomości nie powiodło się!";
            alertElement.style.color = "red";
        }
    );
});