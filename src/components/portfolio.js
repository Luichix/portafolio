import React from 'react'
import App1 from '../assets/img/app1.png'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from '../css/module/portfolio.module.css'

function Portfolio() {
  return (
    <section id="portfolio" className={style.portfolio}>
      <h2 className={style.title}>Portafolio</h2>
      <div className={style.container}>
        <Fade bottom>
          <div className={style.item}>
            <h4>Sistema de Nomina</h4>
            <img src={App1} className={style.image} alt="App1"></img>
            <div className={style.links}>
              <a href="#" target="_blank" rel="noreferrer" >
                <i><FcInfo/></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i><FcLink/></i>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Portfolio
