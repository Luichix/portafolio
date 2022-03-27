import React, { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App () {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} />
      <Footer/>
    </div>
  )
}

export default App
