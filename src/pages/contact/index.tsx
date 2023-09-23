import { useState, useContext } from 'react'
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
import { Alert } from '@Components/common/Alert'
import useAlert from '@Components/common/Alert/useAlert'
import Title from '@Components/common/Title'
import Container from '@Components/layout/Container'

export function Contact() {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const text = content[language]

  const personal = [
    {
      icon: 'map',
      label: text.personal.city,
      text: 'Chinandega, Nicaragua',
      isLink: false,
    },
    {
      icon: 'phone',
      label: text.personal.phone,
      text: '+ 505 8458-4479',
      isLink: true,
      link: 'https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web',
    },
    {
      icon: 'email',
      label: text.personal.email,
      text: 'luisreynaldo.pch@gmail.com',
      isLink: true,
      link: 'mailto:luichix.rex@gmail.com',
    },
  ]

  const [show, info, alert, showAlert] = useAlert()

  const maxLength = 350 // Cambia esto al número máximo de caracteres permitidos
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
          showAlert('Mensaje enviado con exito!', 'success')
          console.log('SUCCESS!', response.status, response.text)
          setEmail('')
          setIssue('')
          setMessage('')
        },
        (err) => {
          showAlert('Ha ocurrido un error al enviar el mensaje!', 'error')
          console.log('FAILED...', err)
        }
      )
  }

  return (
    <Container id="contact">
      <Alert show={show} alert={alert} message={info} />
      <Fade>
        <Title theme={theme}>{text.title}</Title>
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
              {personal.map(({ icon, label, text, isLink, link }, index) => (
                <Info
                  key={index}
                  icon={icon}
                  label={label}
                  text={text}
                  isLink={isLink}
                  link={link}
                  theme={theme}
                />
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
              className={style.group}
              onSubmit={handleSendEmail}
              autoComplete="off"
            >
              <div
                className={classNames(style.form, {
                  light: !theme,
                  dark: theme,
                })}
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
                    rows={10} // Ajusta el número de filas según tus necesidades
                    cols={50} //
                  />
                </fieldset>
              </div>
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
    </Container>
  )
}

export default Contact

const Info = ({
  icon,
  label,
  text,
  isLink,
  link,
  theme,
}: {
  icon: string
  label: string
  text: string
  isLink: boolean
  link?: string
  theme: boolean
}) => {
  return (
    <div className={style.tag}>
      <i
        className={classNames({
          bgs_light: !theme,
          bgs_dark: theme,
        })}
      >
        {icon === 'map' && <BiMap />}
        {icon === 'phone' && <BiPhoneCall />}
        {icon === 'email' && <BiMailSend />}
      </i>
      <div className={style.element}>
        <h4
          className={classNames({
            title_light: !theme,
            title_dark: theme,
          })}
        >
          {label}
        </h4>

        {isLink ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={classNames({
              span_light: !theme,
              span_dark: theme,
            })}
          >
            {text}
          </a>
        ) : (
          <p
            className={classNames({
              span_light: !theme,
              span_dark: theme,
            })}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
