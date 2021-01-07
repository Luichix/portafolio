import React from 'react'
import Header from './component/header'
import Story from './component/story'
import Main from './component/main'
import Footer from './component/footer'
import { HiMenu, HiArrowCircleUp } from 'react-icons/hi'

function App () {
  return (
        <div>
          <button type="button" className="mobile-nav-toggle d-xl-none"><i><HiMenu /></i></button>
          <Header/>
          <Story/>
          <Main/>
          <Footer/>
          <a href="#" className="back-to-top" display="inline"><i><HiArrowCircleUp/></i></a>
        </div>

  )
}

export default App
