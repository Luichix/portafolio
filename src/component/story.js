import React from 'react'
import Typed from './typed'

function Story () {
  return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Luichix Rex</h1>
                <Typed/>
                <p><span className="typed" data-typed-items="Diseñador web, Desarrollador"></span></p>
                {/* <h2 className="titulo">Traé a tu mascota <br/> <span className="typed">{typed} </span></h2> */}
            </div>
      </section>
  )
}
export default Story
