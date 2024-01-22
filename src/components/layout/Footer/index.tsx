import style from './styles.module.css'
import { LanguageContext } from '@Contexts/language'
import { useContext, useState } from 'react'
import lang from '@Language/footer.json'
import { ThemeContext } from '@Contexts/theme'
import classNames from 'classnames'

export function Footer() {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const text = lang[language]

  const year = new Date().getFullYear()
  return (
    <footer
      id="footer"
      className={classNames(style.footer, {
        bg_navbar_dark: theme,
        bg_navbar_light: !theme,
        color_navbar_dark: theme,
        color_navbar_light: !theme,
      })}
    >
      <div className={style.credits}>
        <p>
          {text.copy} &copy; &nbsp; {year}
        </p>
        <p>
          {text.desing} &nbsp;
          <a href="https://github.com/Luichix" target="_blank" rel="noreferrer">
            {text.name}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
