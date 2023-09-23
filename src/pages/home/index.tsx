import { useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'
import { Link } from 'react-scroll'
import { ThemeContext } from '@Contexts/theme'

import { FaArrowDown } from 'react-icons/fa'
import classNames from 'classnames'
import Paragraph from '@Components/common/Paragraph'
import Container from '@Components/layout/Container'

import { Expand } from '@theme-toggles/react'
import Language from '@Components/svg/Language'

export function Home() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const content = text[language]
  const { theme, changeTheme } = useContext(ThemeContext)

  const [offset, setOffset] = useState(0)
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Modificar el estilo basado en el valor de offset
    if (offset > 100) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }, [offset])

  return (
    <Container id="home" type="separated">
      <div
        className={classNames(styles.accesibility, {
          [styles.hidden]: !visibility,
        })}
      >
        <div className={styles.toggles}>
          <Expand
            toggled={theme}
            toggle={changeTheme as any}
            className={classNames(styles.swithTheme)}
          />
        </div>
        <div className={styles.toggles}>
          <button
            type="button"
            onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
            className={classNames(styles.swithLanguage)}
          >
            <i>{language}</i>
            <Language className={styles.language} />
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.container, {
          light: !theme,
          text_dark: theme,
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
      </div>

      <div className={styles.comment}>
        <Paragraph theme={theme}>{content.about}</Paragraph>

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
    </Container>
  )
}

export default Home
