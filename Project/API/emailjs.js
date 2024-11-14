import emailjs from 'emailjs-com';

emailjs.init('gSXmR7BpaOZaXS77r');

function sendMail() {
  let params = {
      email: document.getElementById('email').value,
      name: document.getElementById('name').value
  };

  const serviceID = 'service_c5xhayf'; // ID do serviço do EmailJS
  const templateID = 'template_swvzopf'; // ID do template do EmailJS

  emailjs.send(serviceID, templateID, params)
      .then(response => {
          alert('Mensagem enviada com sucesso!');
      })
      .catch(error => console.error('Erro ao enviar mensagem:', error));
}