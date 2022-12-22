import { Sidebar, Footer } from '@Components/layout/index'
import { Home, About, Portfolio, Contact } from '@Pages/index'
import styles from '@Styles/styles.module.css'

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Sidebar />
        <main id="main" className={styles.main}>
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Main