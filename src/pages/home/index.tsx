import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '@Contexts/language'
import text from '@Language/home.json'
import styles from './styles.module.css'
import { Link } from 'react-scroll'
import { ThemeContext } from '@Contexts/theme'

import { BiMessageDetail } from 'react-icons/bi'
import classNames from 'classnames'
import Paragraph from '@Components/common/Paragraph'
import Container from '@Components/layout/Container'

import react from '@Assets/ico/react.svg'
import python from '@Assets/ico/python.svg'
import nodejs from '@Assets/ico/nodejs.svg'

export function Home() {
  const { language } = useContext(LanguageContext)
  const content = text[language]
  const { theme } = useContext(ThemeContext)

  return (
    <Container id="home" type="separated">
      <div
        className={classNames(styles.section, {
          light: !theme,
          text_dark: theme,
        })}
      >
        <div
          className={classNames(styles.card, {
            [styles.lightCard]: !theme,
            [styles.darkCard]: theme,
          })}
        >
          <span>{content.job1}</span>
          <span>{content.job2}</span>
        </div>
        <div className={styles.call}>
          <p>{content.introduce1}</p>
          <p>{content.introduce2}</p>
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
            <span>{content.contact}</span>
            <BiMessageDetail />
          </Link>
        </div>
      </div>
      <div
        className={classNames(styles.group, {
          [styles.bgDark]: theme,
        })}
      >
        <img src={react} />
        <img src={python} />
        <img src={nodejs} />
      </div>
    </Container>
  )
}

export default Home
