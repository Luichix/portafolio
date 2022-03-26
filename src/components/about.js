import React from 'react'
import perfil from '../assets/img/perfil.png'
import { FcNext, FcDocument } from 'react-icons/fc'
import pdfCv from '../assets/pdf/cvoficial.pdf'
import { Fade } from 'react-awesome-reveal'
import style from '../css/module/about.module.css'
import { about, personal, skillWeb, skillData } from '../data/info'


function About() {
  return (
    <section id="about" className={style.about}>
      <div className={style.container}>
        <div className={style.section}>
          <h2>Sobre mi</h2>
          <p>{about.paragraph[0]}</p>
          <p>{about.paragraph[1]}</p>
          <Fade left>
            <figure><img src={perfil} className={style.imagen} alt="foto de perfil" /></figure>
          </Fade>
        </div>
        <div className={style.skills} >
          <Fade right>
            <div className={style.content}>
              <h3>Desarrollador &amp; Administrador de Empresas</h3>
              <ul>
                {personal.map((e,i) => (
                  <li key={i}>
                    <i><FcNext/></i>
                    <strong>{e[0]}</strong>{e[1]}
                  </li>
                ))}
              </ul>
              <h3>Habilidades</h3>
              <div>
                <div>
                  <ul>
                    {skillWeb.map((e,i) => (
                      <li key={i} className={style.align}>
                        <i><FcNext/></i>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {skillData.map((e,i) => (
                      <li key={i} className={style.align}>
                        <i><FcNext/></i>{e}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="cv m-lg-2">
                  <a href={pdfCv} target="_blank" rel="noreferrer">
                    <i>
                      <FcDocument />
                    </i>
                    Curriculum Vitae
                  </a>
                </span>
                <span className="cv m-lg-2">
                  <a
                    href="https://drive.google.com/file/d/1pgxIPuJX9v2ZyTEMLnksZiFYxZBmBt3-/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcDocument />
                    </i>
                    Reporte Integral de Puesto
                  </a>
                </span>
                <span className="cv m-lg-2">
                  <a
                    href="https://drive.google.com/file/d/1Bk8qPd3mLH42c1lXI4gNygEakgbM8feU/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcDocument />
                    </i>
                    Reporte Psicosometrico
                  </a>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default About
