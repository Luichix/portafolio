import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'
import { Link } from 'react-scroll'
import { Expand } from '@theme-toggles/react'
import { ThemeContext } from '@Contexts/theme'
import Language from '@Components/svg/Language'
import { FaArrowDown } from 'react-icons/fa'
import classNames from 'classnames'

export function Home() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const content = text[language]
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <section id="home" className={styles.home}>
      <div className={styles.accesibility}>
        <Expand
          toggled={theme}
          toggle={setTheme}
          className={classNames(styles.toggles, {
            text_light: !theme,
            text_dark: theme,
          })}
        />
        <button
          type="button"
          onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
          className={classNames(styles.swithLanguage, {
            text_light: !theme,
            text_dark: theme,
          })}
        >
          <i>{language}</i>
          <Language className={styles.language} />
        </button>
      </div>
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
