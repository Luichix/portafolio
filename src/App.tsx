import { useContext } from 'react'
import { Sidebar, Footer } from '@Components/layout/index'
import { Home, About, Portfolio, Contact } from '@Pages/index'
import Skills from '@Pages/skills'
import styles from '@Styles/styles.module.css'
import { ThemeContext } from './contexts'
import classNames from 'classnames'

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
      {/* <div
        style={{
          position: 'fixed',
          margin: 'auto',
          top: 0,
          right: 0,
          width: '300px',
          backgroundColor: '#fea',
          padding: '10px',
          borderRadius: ' 0 0 10px 10px  ',
          color: '#333',
          textAlign: 'center',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          opacity: 0.7,
          fontWeight: 'bold',
        }}
      >
        <span>En Proceso de Actualizacion</span>
        <span>20 Septiembre 2023</span>
      </div> */}
      <div className={styles.section}>
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
