import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { resume } from '../data/info'
import style from '../css/module/resume.module.css'

function Resume () {
  return (
    <section id='Estudios' className={style.resume}>
      <div className={style.container}>
        <h2 className={style.title}>Estudios</h2>
      </div>
      <div className={style.study}>
        <Fade bottom>
          {resume.map((e,i) => (
            <div key={i} className={style.item}>
              <h4>{e[0]}</h4>
              <h5><em>{e[1]}</em></h5>
              <ul>
                <li>{e[2]}</li>
                <li className={e[3] === 'Suspendido' ? style.red : style.green} >{e[3]}</li>
              </ul>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default Resume
