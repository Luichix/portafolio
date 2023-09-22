import { useContext } from 'react'
import { LanguageContext, ThemeContext } from '@Contexts/index'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import data from '@Language/about.json'
import classNames from 'classnames'
import profile from '../../assets/img/profile.jpg'
import pdfCv from '../../assets/pdf/cvoficial.pdf'
import pdfRIntegral from '../../assets/pdf/rintegralpuesto.pdf'
import { FcDownload } from 'react-icons/fc'
import Paragraph from '@Components/common/Paragraph'
import Title from '@Components/common/Title'

export function About() {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  const text = data[language]
  return (
    <section id="about" className={style.about}>
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
            <div>
              <Paragraph theme={theme} indent>
                {text.salute}
              </Paragraph>
              <Paragraph theme={theme} indent>
                {text.resume}
              </Paragraph>
            </div>
          </Fade>
          <div>
            <figure className={style.figure}>
              <img
                src={profile}
                className={style.imagen}
                width={'350px'}
                height={'auto'}
              />
            </figure>
          </div>
        </div>
        <div>
          <span className={style.access}>{text.access}</span>
          <div className={style.download}>
            <a
              href={pdfCv}
              target="_blank"
              rel="noreferrer"
              className={classNames(style.button, {
                title_light: !theme,
                title_dark: theme,
              })}
            >
              <i>
                <FcDownload style={{ display: 'block' }} />
              </i>
              <span>{text.cv}</span>
            </a>
            <a
              href={pdfRIntegral}
              target="_blank"
              rel="noreferrer"
              className={classNames(style.button, {
                title_light: !theme,
                title_dark: theme,
              })}
            >
              <i>
                <FcDownload style={{ display: 'block' }} />
              </i>

              <span>{text.report}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
