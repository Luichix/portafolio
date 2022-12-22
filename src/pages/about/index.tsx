import { useContext } from 'react'
import { LanguageContext } from '@Contexts/index'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import data from '@Language/about.json'

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
  const text = data[language]
  return (
    <section id="Sobre mi" className={style.about}>
      <div className={style.container}>
        <div className={style.section}>
          <Fade triggerOnce>
            <h2>{text.title}</h2>
          </Fade>
          <Fade triggerOnce>
            <p>{text.me}</p>
            <p>
              {text.salute} {getAge(text.age)} {text.resume}
            </p>
            <p>{text.goals}</p>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default About
