import React, { useState } from 'react'
import Header from './components/layout/Header'
import Main from './pages/main'
import Footer from './components/layout/Footer'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} />
      <Footer />
    </div>
  )
}

export default App
