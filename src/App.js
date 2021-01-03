import React from 'react'
import Header from './component/header'
import Story from './component/story'
import { HiMenu } from 'react-icons/hi'

function App () {
  return (
        <div>
        {/* Mobile Nav Toggle Button */}
          <button type="button" className="mobile-nav-toggle d-xl-none"><i><HiMenu /></i></button>
          <Header/>
          <Story/>
        </div>

  )
}

export default App
