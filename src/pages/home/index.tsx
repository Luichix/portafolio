import { useContext } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'
import { Link } from 'react-scroll'

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
        <Link
          className={styles.button}
          to={'contact'}
          spy={true}
          smooth="easeInOutQuint"
          offset={100}
          duration={1500}
        >
          {content.contact}
        </Link>
      </div>
    </section>
  )
}

export default Home
