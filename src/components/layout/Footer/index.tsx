import style from './styles.module.css'
import { LanguageContext } from '@Contexts/language'
import { useContext, useState } from 'react'
import lang from '@Language/footer.json'

export function Footer() {
  const { language } = useContext(LanguageContext)
  const text = lang[language]

  const year = new Date().getFullYear()
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.credits}>
        <p>
          {text.copy} &copy; &nbsp; {year}
        </p>
        <p>
          {text.desing} &nbsp;
          <a href="https://github.com/Luichix" target="_blank" rel="noreferrer">
            Luichix
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
