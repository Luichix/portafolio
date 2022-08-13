import React, { useContext } from 'react'
import LanguageContext from '../context/language'
import data from '../data/story.json'
import perfil from '../assets/img/perfil.png'
import { FcNext, FcDocument } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import { aboutMe, skill, document } from '../data/info'
import Portfolio from '../components/custom/portfolio'
import Contact from '../components/custom/contact'
import style from './main.module.css'
import { resume } from '../data/info'

function Main({ toggle }) {
  const { language } = useContext(LanguageContext)
  const { story, about } = data[language]

  return (
    <main id="main" className={toggle ? style.margin : style.all}>
      <section id="Inicio" className={style.hero}>
        <div className={style.container}>
          <h3>{story.salutation}</h3>
          <h1>{story.name}</h1>
          <h3>{story.job}</h3>
          <button>{story.contact}</button>
        </div>
      </section>
      <section id="Sobre mi" className={style.about}>
        <div className={style.containerAbout}>
          <div className={style.section}>
            <Fade triggerOnce>
              <h2>{about.title}</h2>
              <figure className={style.figure}>
                <img
                  src={perfil}
                  className={style.imagen}
                  alt="foto de perfil"
                />
              </figure>
            </Fade>
            <Fade triggerOnce>
              <p>{about.me}</p>
              <p>{aboutMe.paragraph[1]}</p>
            </Fade>
            <div className={style.skills}>
              <Fade>
                {skill.map((s, o) => (
                  <div key={o} className={style.content}>
                    <h3>{s[0]}</h3>
                    <ul className={style.group}>
                      {s[1].map((e, i) => (
                        <li key={i} className={style.align}>
                          <i>
                            <FcNext />
                          </i>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className={style.document}>
            {document.map((e, i) => (
              <span key={i} className={style.cv}>
                <a href={e[1]} target="_blank" rel="noreferrer">
                  <i>
                    <FcDocument />
                  </i>
                  {e[0]}
                </a>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="Estudios" className={style.resume}>
        <div className={style.containerResume}>
          <h2 className={style.title}>Estudios</h2>
        </div>
        <div className={style.study}>
          <Fade bottom>
            {resume.map((e, i) => (
              <div key={i} className={style.item}>
                <h4>{e[0]}</h4>
                <h5>
                  <em>{e[1]}</em>
                </h5>
                <ul>
                  <li>{e[2]}</li>
                  <li
                    className={e[3] === 'Suspendido' ? style.red : style.green}
                  >
                    {e[3]}
                  </li>
                </ul>
              </div>
            ))}
          </Fade>
        </div>
      </section>
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
