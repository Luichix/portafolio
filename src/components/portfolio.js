import React from 'react'
import App1 from '../assets/img/app1.png'
import App2 from '../assets/img/app2.png'
import App3 from '../assets/img/app3.png'
import App4 from '../assets/img/app4.png'
import App5 from '../assets/img/app5.png'
import App6 from '../assets/img/app6.png'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portafolio</h2>
        </div>
        <Fade bottom>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <h4>Sistema de Nomina</h4>
                <img src={App1} className="img-fluid" alt="App1"></img>
                <div className="portfolio-links">
                  <a>
                    <i>
                      <FcInfo />
                    </i>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1n9U5PGCsZQkikT7oYOOcLjcVKs2Sk1Ok/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <h4>Sistema de Ventas</h4>
                <img src={App2} className="img-fluid" alt="App2"></img>
                <div className="portfolio-links">
                  <a>
                    <i className="react-icons">
                      <FcInfo />
                    </i>
                  </a>
                  <a>
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <h4>Sistema de Contabilidad</h4>
                <img src={App3} className="img-fluid" alt="App3"></img>
                <div className="portfolio-links">
                  <a
                    href="https://github.com/Luichix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcInfo />
                    </i>
                  </a>
                  <a>
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <h4>Analista Financiero</h4>
                <img src={App4} className="img-fluid" alt="App1"></img>
                <div className="portfolio-links">
                  <a>
                    <i>
                      <FcInfo />
                    </i>
                  </a>
                  <a>
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <h4>Proyectos</h4>
                <img src={App5} className="img-fluid" alt="App2"></img>
                <div className="portfolio-links">
                  <a>
                    <i className="react-icons">
                      <FcInfo />
                    </i>
                  </a>
                  <a
                    href="https://github.com/Luichix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <h4>Portafolio</h4>
                <img src={App6} className="img-fluid" alt="App3"></img>
                <div className="portfolio-links">
                  <a>
                    <i>
                      <FcInfo />
                    </i>
                  </a>
                  <a
                    href="https://luichix.github.io/portafolio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Portfolio
