import React from 'react'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from '../css/module/portfolio.module.css'
import { task } from '../data/info'

function Portfolio() {
  return (
    <section id='Portafolio' className={style.portfolio}>
      <h2 className={style.title}>Portafolio</h2>
      <div className={style.container}>
        <Fade bottom>
          {task.map((e,i) => (
            <div key={i} className={style.item}>
              <h4>{e[0]}</h4>
              <img src={e[1]} className={style.image} alt={e[0]}></img>
              <div className={style.links}>
                <a><i><FcInfo/></i></a>
                <a href={e[2]} target="_blank" rel="noreferrer">
                  <i><FcLink/></i>
                </a>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default Portfolio
