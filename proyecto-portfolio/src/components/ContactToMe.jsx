import "./Contact.css"
import emailjs from '@emailjs/browser';
export function ContactToMe () {

  const handelSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9q7fuqa', 'template_2q6xkk9', e.target, '2fWJZZ6v1WAGPDxbw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" id="name" placeholder="Nombre" required/>
        <input type="email" name="email" id="email" placeholder="Email" required/>
        <textarea type="text" name="message" id="message" placeholder="Mensaje" rows="10" required/>
        <button type="submit" className="btn">Enviar!</button>
      </form>
    </>
  )
}