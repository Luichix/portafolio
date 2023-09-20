import { useContext } from 'react'
import { LanguageContext, ThemeContext } from '@Contexts/index'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import data from '@Language/about.json'
import classNames from 'classnames'
import profile from '../../assets/img/profile.jpg'
import pdfCv from '../../assets/pdf/cvoficial.pdf'
import { FcNext, FcDocument } from 'react-icons/fc'
function getAge(dateString: string) {
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad
}

export function About() {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  const text = data[language]
  return (
    <section id="about" className={style.about}>
      <div className={style.container}>
        <Fade triggerOnce>
          <h2
            className={classNames({
              title_light: !theme,
              title_dark: theme,
            })}
          >
            {text.title}
          </h2>
        </Fade>
        <div className={style.section}>
          <Fade
            triggerOnce
            className={classNames({
              light: !theme,
              dark: theme,
            })}
          >
            <div>
              <p>{text.salute}</p>
              <p>{text.resume}</p>
            </div>
          </Fade>
          <div>
            <figure className={style.figure}>
              <img
                src={profile}
                className={style.imagen}
                width={'350px'}
                height={'auto'}
              />
            </figure>
          </div>
          <div>
            <span className={style.access}>{text.access}</span>
            <a
              href={pdfCv}
              target="_blank"
              rel="noreferrer"
              className={classNames(style.button, {
                title_light: !theme,
                title_dark: theme,
              })}
            >
              <i>
                <FcDocument style={{ display: 'block' }} />
              </i>
              <span>{text.download}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
