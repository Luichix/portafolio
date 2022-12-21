import React, { useContext } from 'react'
import LanguageContext from '../context/language'

import { aboutMe, skill, document } from '../data/info'
import { Fade } from 'react-awesome-reveal'
import style from './main.module.css'

function About() {
  const { language } = useContext(LanguageContext)
  const { about } = data[language]
  return (
    <section id="Sobre mi" className={style.about}>
      <div className={style.containerAbout}>
        <div className={style.section}>
          <Fade triggerOnce>
            <h2>{about.title}</h2>
            <figure className={style.figure}>
              <img src={perfil} className={style.imagen} alt="foto de perfil" />
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
  )
}

export default About
