import { useContext } from 'react'
import styles from './styles.module.css'
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { Expand } from '@theme-toggles/react'
import Language from '@Components/svg/Language'
import { LanguageContext, ThemeContext } from '@Contexts/index'
export function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <h1 className={styles.name}>
          <b>Luis</b> Reynaldo
        </h1>
        <ul className={styles.elements}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
            <div className={styles.toggles}>
              <button
                type="button"
                onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                className={styles.swithLanguage}
              >
                <Language className={styles.language} />
              </button>
            </div>
            <div className={styles.toggles}>
              <Expand
                toggled={theme}
                toggle={changeTheme as any}
                className={styles.swithTheme}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
