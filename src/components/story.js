import React from 'react'
import Typed from './typed'
import style from '../css/module/story.module.css'

function Story() {
  return (
    <section id="Inicio" className={style.hero}>
      <div className={style.container}>
        <h1>Luis Reynaldo</h1>
        <p><span className={style.typed}><Typed/></span></p>
      </div>
    </section>
  )
}
export default Story
