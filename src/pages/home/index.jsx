import React, { useContext } from 'react'
import LanguageContext from '../../context/language'
import text from './../../language/home.json'
import styles from './styles.module.css'

function Home() {
  const { language } = useContext(LanguageContext)
  const content = text[language]
  return (
    <section id="Inicio" className={styles.hero}>
      <div className={styles.container}>
        <h1>
          {content.hi} <br />
          {content.name}
        </h1>
        <h3>{content.job}</h3>
      </div>
    </section>
  )
}

export default Home
