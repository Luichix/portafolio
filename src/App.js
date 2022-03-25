import React from 'react'
import Header from './components/header'
// import Story from './components/story'
// import Main from './components/main'
// import Footer from './components/footer'
import { HiMenu, HiArrowCircleUp } from 'react-icons/hi'

function App () {
  return (
    <div>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i><HiMenu /></i></button>
      <Header/>
      {/* <Story/> */}
      {/* <Main/> */}
      {/* <Footer/> */}
      <a href="#" className="back-to-top" display="inline"><i><HiArrowCircleUp/></i></a>
    </div>

  )
}

export default App
