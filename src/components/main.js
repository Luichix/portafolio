import React from 'react'
import Story from './story'
import About from './about'
import Resume from './resume'
import Portfolio from './portfolio'
import Contact from './contact'

function Main() {
  return (
    <main id="main">
      <Story/>
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
