import { useContext } from 'react'
import styles from './styles.module.css'
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { Expand } from '@theme-toggles/react'
import Language from '@Components/svg/Language'
import { LanguageContext, ThemeContext } from '@Contexts/index'
import content from '@Language/navbar.json'
import classNames from 'classnames'

export function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const { theme, changeTheme } = useContext(ThemeContext)

  const text = content[language]

  return (
    <div
      className={classNames(styles.container, {
        bg_navbar_dark: theme,
        bg_navbar_light: !theme,
        color_navbar_dark: theme,
        color_navbar_light: !theme,
      })}
    >
      <nav className={styles.navigation}>
        <h1 className={styles.name}>
          <b>{text.name}</b> {text.middleName}
        </h1>
        <ul className={styles.elements}>
          <li>
            <a href="#about">{text.about}</a>
          </li>
          <li>
            <a href="#skills">{text.skills}</a>
          </li>
          <li>
            <a href="#portfolio">{text.portfolio}</a>
          </li>
          <li>
            <a href="#contact">{text.contact}</a>
          </li>
        </ul>
        <div className={styles.section}>
          <div className={styles.links}>
            <a
              href="https://github.com/Luichix"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luisreynaldopch"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className={styles.accesibility}>
            <div
              className={classNames(styles.toggles, {
                [styles.toggleDark]: theme,
                [styles.toggleLight]: !theme,
              })}
            >
              <button
                type="button"
                onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                className={classNames(styles.swithLanguage, {
                  [styles.swithDark]: theme,
                  [styles.swithLight]: !theme,
                })}
              >
                <Language className={styles.language} />
              </button>
            </div>
            <div
              className={classNames(styles.toggles, {
                [styles.toggleDark]: theme,
                [styles.toggleLight]: !theme,
              })}
            >
              <Expand
                toggled={theme}
                toggle={changeTheme as any}
                className={classNames(styles.swithTheme, {
                  [styles.swithDark]: theme,
                  [styles.swithLight]: !theme,
                })}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
