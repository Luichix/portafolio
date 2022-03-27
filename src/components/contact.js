import React, { useState } from 'react'
import { personal, form } from '../data/info'
import style from '../css/module/contact.module.css'
import emailjs from '@emailjs/browser'
import { Fade } from 'react-awesome-reveal'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    const messageObject ={
      name, email, issue, message
    }

    console.log('prueba')
    emailjs.send('service_portfolio', 'template_portfolio', messageObject , 'cLLFrT38MYC7J_zBS')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    setName('')
    setEmail('')
    setIssue('')
    setMessage('')
  }

  return (
    <section id='Contacto' className={style.contact}>
      <Fade>
        <div className={style.cover}>
          <h2 className={style.title}>Contacto</h2>
        </div>
      </Fade>
      <div className={style.container}>
        <Fade>
          <div className={style.section}>
            <div className={style.group}>
              <div className={style.info}>
                <h3>Información de Contacto</h3>
                {personal.map((e,i) => (
                  <div key={i} >
                    <i>{e[0]}</i>
                    <h4>{e[1]}</h4>
                    <p>{e[2]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className={style.section}>
            <h3>¡Envía un mensaje!</h3>
            <form onSubmit={sendEmail} className={style.form} autoComplete='off' >
              <fieldset className={style.data} >
                <label htmlFor='name'>{form.contact}</label>
                <input id='name' type='text' required value={name} onChange={({ target }) => setName(target.value)}/>
                <label htmlFor='email' >{form.email}</label>
                <input id='email' type='text' required value={email} onChange={({ target }) => setEmail(target.value)} />
                <label htmlFor='issue'>{form.issue}</label>
                <input id='issue' type='text' required value={issue} onChange={({ target }) => setIssue(target.value)}/>
              </fieldset>
              <fieldset className={style.data}>
                <label htmlFor='message'>{form.message}</label>
                <textarea id='message' required value={message} onChange={({ target }) => setMessage(target.value)}/>
                <button>{form.submit}</button>
              </fieldset>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Contact
