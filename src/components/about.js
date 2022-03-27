import React from 'react'
import perfil from '../assets/img/perfil.png'
import { FcNext, FcDocument } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from '../css/module/about.module.css'
import { about, skill, document } from '../data/info'

function About() {
  return (
    <section id='Sobre mi' className={style.about}>
      <div className={style.container}>
        <div className={style.section}>
          <Fade triggerOnce>
            <h2>Sobre mi</h2>
            <figure className={style.figure}><img src={perfil} className={style.imagen} alt="foto de perfil" /></figure>
          </Fade>
          <Fade triggerOnce >
            <p>{about.paragraph[0]}</p>
            <p>{about.paragraph[1]}</p>
          </Fade>
          <div className={style.skills} >
            <Fade>
              {skill.map((s,o) => (
                <div key={o} className={style.content}>
                  <h3>{s[0]}</h3>
                  <ul className={style.group}>
                    {s[1].map((e,i) => (
                      <li key={i} className={style.align}>
                        <i><FcNext/></i>{e}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <div className={style.document}>
          {document.map((e,i) => (
            <span key={i} className={style.cv}>
              <a href={e[1]} target="_blank" rel="noreferrer">
                <i><FcDocument/></i>{e[0]}</a>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
