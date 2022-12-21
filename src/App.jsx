import React, { useState } from 'react'
import Sidebar from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home'
// import About from './pages/about'
// import Portfolio from './pages/portfolio'
// import Contact from './pages/contact'

function Main() {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar toggle={toggle} setToggle={setToggle} />
        <main id="main" style={{ width: '100%', position: 'relative' }}>
          <Home />
          {/* <About />
          <Portfolio />
          <Contact /> */}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Main
