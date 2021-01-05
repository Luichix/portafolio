import React from 'react'
import App1 from '../assets/img/app1.png'
import { FcInfo, FcLink } from 'react-icons/fc'
import Fade from 'react-reveal/Fade'

function Portfolio () {
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
                                <h4>Aplicación 1</h4>
                                <img src={App1} className="img-fluid" alt="App1"></img>
                                <div className="portfolio-links">
                                    <a><i><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item">
                            <div className="portfolio-wrap">
                                <h4>Aplicación 2</h4>
                                <img src={App1} className="img-fluid" alt="App2"></img>
                                <div className="portfolio-links">
                                    <a><i className="react-icons"><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item">
                            <div className="portfolio-wrap">
                                <h4>Aplicacion 3</h4>
                                <img src={App1} className="img-fluid" alt="App3"></img>
                                <div className="portfolio-links">
                                    <a><i><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <h4>Aplicación 4</h4>
                                <img src={App1} className="img-fluid" alt="App1"></img>
                                <div className="portfolio-links">
                                    <a><i><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item">
                            <div className="portfolio-wrap">
                                <h4>Aplicación 5</h4>
                                <img src={App1} className="img-fluid" alt="App2"></img>
                                <div className="portfolio-links">
                                    <a><i className="react-icons"><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item">
                            <div className="portfolio-wrap">
                                <h4>Aplicacion 6</h4>
                                <img src={App1} className="img-fluid" alt="App3"></img>
                                <div className="portfolio-links">
                                    <a><i><FcInfo/></i></a>
                                    <a><i><FcLink/></i></a>
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
