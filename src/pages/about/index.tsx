import { useContext } from 'react'
import { LanguageContext, ThemeContext } from '@Contexts/index'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import data from '@Language/about.json'
import classNames from 'classnames'
import profile from '../../assets/img/perfil.png'
import pdfCv from '../../assets/pdf/cvoficial.pdf'
import pdfRIntegral from '../../assets/pdf/rintegralpuesto.pdf'
import { FaFilePdf } from 'react-icons/fa'
import Paragraph from '@Components/common/Paragraph'
import Title from '@Components/common/Title'
import Container from '@Components/layout/Container'

export function About() {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  const text = data[language]
  return (
    <Container id="about">
      <div className={style.container}>
        <Fade triggerOnce>
          <Title theme={theme}>{text.title}</Title>
        </Fade>
        <div className={style.section}>
          <Fade
            triggerOnce
            className={classNames({
              text_light: !theme,
              text_dark: theme,
            })}
          >
            <div className={style.content}>
              <h1 className={style.introduce}>{text.introduce} </h1>
              <Paragraph theme={theme}>{text.salute}</Paragraph>
              <Paragraph theme={theme}>{text.resume}</Paragraph>
              <div>
                <span className={style.access}>{text.access}</span>
                <div className={style.download}>
                  <a
                    href={pdfCv}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(style.button, {
                      [style.bgDark]: theme,
                      title_light: !theme,
                      title_dark: theme,
                    })}
                  >
                    <i>
                      <FaFilePdf style={{ display: 'block' }} />
                    </i>
                    <span>{text.cv}</span>
                  </a>
                  <a
                    href={pdfRIntegral}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(style.button, {
                      [style.bgDark]: theme,
                      title_light: !theme,
                      title_dark: theme,
                    })}
                  >
                    <i>
                      <FaFilePdf style={{ display: 'block' }} />
                    </i>

                    <span>{text.report}</span>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <div>
            <figure className={style.figure}>
              <img
                src={profile}
                className={style.imagen}
                width={350}
                height={350}
              />
            </figure>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
