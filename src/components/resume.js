import React from 'react'
import { Fade } from 'react-awesome-reveal'

function Resume () {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Estudios</h2>
        </div>
        <Fade bottom>
          <div className="row">
            <div className="col-lg-12">
              <div className="resume-item">
                <h4>Técnico Medio en Administración de Empresas</h4>
                <p><em>Instituto Técnico para la Administración y Economia - INTAE Mercantil de Occidente </em></p>
                <ul>
                  <li>Periodo 2010-2012</li>
                  <li>Finalizado</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Licenciatura en Administración de Empresas</h4>
                <p><em>Universidad Nacional Autonoma de Nicaragua - UNAN Leon</em></p>
                <ul>
                  <li>Periodo 2013-2017</li>
                  <li>Finalizado</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Licenciatura en Derecho</h4>
                <p><em>Universidad Nacional Autonoma de Nicaragua - UNAN Managua</em></p>
                <ul>
                  <li>Periodo 2016-2018</li>
                  <li>Suspendido</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Maestria en Administración de Empresas</h4>
                <p><em>Instituto Centroamericano de Administración de Empresas - INCAE</em></p>
                <ul>
                  <li>Periodo 2020-2021</li>
                  <li>Suspendido</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Resume
