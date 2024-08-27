//import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_paccnmf', 'template_pqb568o', e.target, 'ptNCneXPkerPcOMwE')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}