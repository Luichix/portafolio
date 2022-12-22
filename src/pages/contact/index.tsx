import React, { useState, useContext } from 'react'
import style from './styles.module.css'
import emailjs from '@emailjs/browser'
import { Fade } from 'react-awesome-reveal'
import { BiMap, BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { LanguageContext } from '@Contexts/language'
import content from '@Language/contact.json'

const personal = [
  [<BiMap key="map" />, 'Ciudad: ', 'Chinandega, Nicaragua'],
  [<BiPhoneCall key="phone" />, 'Teléfono: ', '+ 505 8458-4479'],
  [<BiMailSend key="email" />, 'Email: ', 'luisreynaldo.pch@gmail.com'],
]

export function Contact() {
  const { language } = useContext(LanguageContext)
  const text = content[language]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e: any) => {
    e.preventDefault()

    const messageObject = {
      name,
      email,
      issue,
      message,
    }

    emailjs
      .send(
        'service_portfolio',
        'template_portfolio',
        messageObject,
        'cLLFrT38MYC7J_zBS'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    setName('')
    setEmail('')
    setIssue('')
    setMessage('')
  }

  return (
    <section id="Contacto" className={style.contact}>
      <div className={style.content}>
        <Fade>
          <h2 className={style.title}>Contacto</h2>
        </Fade>
        <div className={style.container}>
          <Fade>
            <div className={style.info}>
              <h3>Información de Contacto</h3>
              <div className={style.group}>
                {personal.map((e, i) => (
                  <div key={i} className={style.tag}>
                    <i>{e[0]}</i>
                    <div className={style.element}>
                      <h4>{e[1]}</h4>
                      <p>{e[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={style.section}>
              <h3>¡Envía un mensaje!</h3>
              <form
                onSubmit={sendEmail}
                className={style.form}
                autoComplete="off"
              >
                <fieldset className={style.data}>
                  <label htmlFor="name">{text.contact}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                  <label htmlFor="email">{text.email}</label>
                  <input
                    id="email"
                    type="text"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <label htmlFor="issue">{text.issue}</label>
                  <input
                    id="issue"
                    type="text"
                    required
                    value={issue}
                    onChange={({ target }) => setIssue(target.value)}
                  />
                </fieldset>
                <fieldset className={style.data}>
                  <label htmlFor="message">{text.message}</label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                  />
                  <button>{text.submit}</button>
                </fieldset>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Contact
