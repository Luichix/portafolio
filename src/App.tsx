import { useContext } from 'react'
import { Sidebar, Footer } from '@Components/layout/index'
import { Home, About, Portfolio, Contact } from '@Pages/index'
import Skills from '@Pages/skills'
import styles from '@Styles/styles.module.css'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'
import { Navbar } from '@Components/layout/Navbar'

function Main() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={classNames(styles.container, {
        bg_light: !theme,
        bg_dark: theme,
        text_light: !theme,
        text_dark: theme,
      })}
    >
      <div className={styles.section}>
        <Navbar />
        <Sidebar />
        <main
          id="main"
          className={classNames(styles.main, {
            [styles.backgroundDark]: theme,
            [styles.backgroundLight]: !theme,
          })}
        >
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Main
