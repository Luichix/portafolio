import { useContext } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'

export function Home() {
  const { language } = useContext(LanguageContext)
  const content = text[language]
  return (
    <section id="home" className={styles.home}>
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
