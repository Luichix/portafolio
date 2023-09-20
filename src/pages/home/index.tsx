import { useContext } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'
import { Link } from 'react-scroll'
import { ThemeContext } from '@Contexts/theme'

import { FaArrowDown } from 'react-icons/fa'
import classNames from 'classnames'

export function Home() {
  const { language } = useContext(LanguageContext)
  const content = text[language]
  const { theme } = useContext(ThemeContext)
  return (
    <section id="home" className={styles.home}>
      <div
        className={classNames(styles.container, {
          light: !theme,
          dark: theme,
        })}
      >
        <h1>
          {content.hi} <br />
          {content.name}
        </h1>
        <h3
          className={classNames({
            title_light: !theme,
            title_dark: theme,
          })}
        >
          {content.job}
        </h3>
        <p
          className={classNames({
            text_light: !theme,
            text_dark: theme,
          })}
        >
          {content.about}
        </p>
        <Link
          className={classNames(styles.button, {
            title_light: !theme,
            title_dark: theme,
          })}
          to={'contact'}
          spy={true}
          smooth="easeInOutQuint"
          offset={100}
          duration={1500}
        >
          {content.contact}
          <FaArrowDown />
        </Link>
      </div>
    </section>
  )
}

export default Home
