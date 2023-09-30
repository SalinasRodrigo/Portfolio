
export function ContactToMe () {


  return (
    <>
      <div>
        <h2>¡Contactame!</h2>
      </div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message" >Mensaje</label>
        <input type="text" name="message" id="message" />
      </form>
    </>
  )
}