//function sendMail() {
//    let parms = {
//        name: document.getElementById("name").value,
//        email: document.getElementById("email").value,
//        subject: document.getElementById("subject").value,
//        message: document.getElementById("message").value,
//    }
//    
//    emailjs.sand('service_paccnmf', 'template_pqb568o', parms).then(alert("Wiadomość została wysłana!"))
//}



const form = document.querySelector('form');
const nameImput = document.getElementById("name");
const emailImput = document.getElementById("email");
const messageImput = document.getElementById("message");

const serviceID = 'service_paccnmf';
const templateID = 'template_i6gg27k';
const publicKey = 'ptNCneXPkerPcOMwE';


emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        name:nameImput.value,
        user_email:emailImput.value,
        message:messageImput.value,
    };
    emailjs.sand(serviceID, templateID, inputData).then(
        () => {
            nameImput.value = '';
            emailImput.value = '';
            messageImput.value = '';
            console.log("Wiadomość została wysłana!");
        },
        (error)=> {
            console.log("Error!");
        }
    );
});
