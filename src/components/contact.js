import React from 'react'
import { BiMap, BiMailSend } from 'react-icons/bi'

// {/* <div className={style.content}>
//   <h3>Información Adicional</h3>
//   <ul>
//     {personal.map((e,i) => (
//       <li key={i} className={style.info}>
//         <i><FcNext/></i>
//         <strong>{e[0]}</strong>{e[1]}
//       </li>
//     ))}
//   </ul>
// </div> */}

function Contact() {
  return (
    <section id='Contacto' className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i>
                  <BiMap />
                </i>
                <h4>Ubicación:</h4>
                <p>Chinandega, Nicaragua</p>
              </div>
              <div className="email">
                <i>
                  <BiMailSend />
                </i>
                <h4>Email:</h4>
                <p>luisreynaldo.pch@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/enviar.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="nombre" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Email</label>
                  <input type="email" className="form-control" name="correo" id="email" data-rule="email" data-msg="Please enter a valid email" required />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Asunto</label>
                <input type="text" className="form-control" name="asunto" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Mensaje</label>
                <textarea className="form-control" name="mensaje" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
              </div>
              <div className="text-center"><button type="submit">Enviar mensaje</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
