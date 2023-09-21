import React, { useState, useContext } from 'react'
import style from './styles.module.css'
import emailjs from '@emailjs/browser'
import { Fade } from 'react-awesome-reveal'
import { BiMap, BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { LanguageContext } from '@Contexts/language'
import content from '@Language/contact.json'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/theme'
import { MdSend } from 'react-icons/md'
import { sendEmail } from '@Services/emailjs'

const personal = [
  [<BiMap key="map" />, 'Ciudad: ', 'Chinandega, Nicaragua'],
  [<BiPhoneCall key="phone" />, 'Teléfono: ', '+ 505 8458-4479'],
  [<BiMailSend key="email" />, 'Email: ', 'luisreynaldo.pch@gmail.com'],
]

export function Contact() {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const text = content[language]

  const maxLength = 300 // Cambia esto al número máximo de caracteres permitidos

  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')

  const handleTextAreaChange = (value: string) => {
    const inputValue = value

    if (inputValue.length <= maxLength) {
      setMessage(inputValue)
    }
  }

  const handleSendEmail = (e: any) => {
    e.preventDefault()

    const messageObject = {
      email,
      issue,
      message,
    }

    emailjs
      .send(
        'service_4wymdde',
        'template_portfolio',
        messageObject,
        '-go0pC4oFwjAo9l-c'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          alert(`SUCESS! ${(response.status, response.text)}`)
        },
        (err) => {
          console.log('FAILED...', err)
          alert('ERROR')
        }
      )
    // setEmail('')
    // setIssue('')
    // setMessage('')
  }

  return (
    <section id="contact" className={style.contact}>
      <div className={style.content}>
        <Fade>
          <h2
            className={classNames(style.title, {
              title_light: !theme,
              title_dark: theme,
            })}
          >
            {text.title}
          </h2>
        </Fade>
        <div className={style.container}>
          <Fade>
            <div
              className={classNames(style.info, {
                bga_light: !theme,
                bga_dark: theme,
              })}
            >
              <h3
                className={classNames({
                  light: !theme,
                  text_dark: theme,
                })}
              >
                {text.info}
              </h3>
              <div className={style.group}>
                {personal.map((e, i) => (
                  <div key={i} className={style.tag}>
                    <i
                      className={classNames({
                        bgs_light: !theme,
                        bgs_dark: theme,
                      })}
                    >
                      {e[0]}
                    </i>
                    <div className={style.element}>
                      <h4
                        className={classNames({
                          title_light: !theme,
                          title_dark: theme,
                        })}
                      >
                        {e[1]}
                      </h4>
                      <p
                        className={classNames({
                          span_light: !theme,
                          span_dark: theme,
                        })}
                      >
                        {e[2]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={style.section}>
              <h3
                className={classNames({
                  light: !theme,
                  dark: theme,
                })}
              >
                {text.send}
              </h3>
              <form
                onSubmit={handleSendEmail}
                className={classNames(style.form, {
                  light: !theme,
                  dark: theme,
                })}
                autoComplete="off"
              >
                <fieldset className={style.data}>
                  <label htmlFor="email">{text.email.label}</label>
                  <input
                    id="email"
                    type="text"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder={text.email.placeholder}
                    className={classNames({
                      text_ligth: !theme,
                      text_dark: theme,
                      bg_light: !theme,
                      bg_dark: theme,
                    })}
                  />
                  <label htmlFor="issue">{text.issue.label}</label>
                  <input
                    id="issue"
                    type="text"
                    required
                    value={issue}
                    onChange={({ target }) => setIssue(target.value)}
                    placeholder={text.issue.placeholder}
                    className={classNames({
                      text_ligth: !theme,
                      text_dark: theme,
                      bg_light: !theme,
                      bg_dark: theme,
                    })}
                  />
                </fieldset>
                <fieldset className={style.data}>
                  <span className={style.textareaCounter}>
                    <label htmlFor="message">{text.message.label}</label>
                    <span>
                      {message.length}/{maxLength}
                    </span>
                  </span>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={({ target }) =>
                      handleTextAreaChange(target.value)
                    }
                    placeholder={text.message.placeholder}
                    className={classNames({
                      text_ligth: !theme,
                      text_dark: theme,
                      bg_light: !theme,
                      bg_dark: theme,
                    })}
                    rows={4} // Ajusta el número de filas según tus necesidades
                    cols={50} //
                  />
                </fieldset>
                <button
                  className={classNames(style.submit, {
                    bga_ligth: !theme,
                    bga_dark: theme,
                    light: !theme,
                    dark: theme,
                  })}
                  type="submit"
                  onClick={() => sendEmail}
                >
                  <span>{text.submit}</span>
                  <MdSend />
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Contact
