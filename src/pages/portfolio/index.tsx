import { useState, useRef, useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { LanguageContext } from '@Contexts/language'
import style from './styles.module.css'
import Modal from '@Components/common/Modal'
import projects from '@Language/projects.json'
import content from '@Language/portfolio.json'
import Card from '@Components/custom/Card'
import Detail from '@Components/custom/Detail'
import Quesos from '@Assets/img/quesos.png'
import Elina from '@Assets/img/elina.png'
import Nicafest from '@Assets/img/nicafest.png'
import Barbershop from '@Assets/img/barbershop.png'
import GoDigit from '@Assets/img/godigit.png'
import Nomina from '@Assets/img/nomina.png'
import Medical from '@Assets/img/medical.png'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/theme'
import Paragraph from '@Components/common/Paragraph'

const images = {
  Medical,
  Quesos,
  Elina,
  Nicafest,
  Barbershop,
  GoDigit,
  Nomina,
} as any

interface Project {
  title: string
  repository: string
  details: Record<string, string>[]
  link: string
  ref: string
  tecnologies: string[]
}
type Category = 'spa' | 'landing' | 'service' | 'other'

enum PROJECTS_CATEGORY {
  spa = 'spa',
  landing = 'landing',
  service = 'service',
  other = 'other',
}

export function Portfolio() {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const text = projects[language]
  const words = content[language]
  const [data, setData] = useState<Project | null>(null)
  const modalRef = useRef<HTMLElement | null>(null)

  const openModal = (element: any) => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
    setData(element)
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }

  // Carousel
  const [currentIndex, setCurrentIndex] = useState<Category>(
    PROJECTS_CATEGORY.spa
  )

  return (
    <section id="portfolio" className={style.portfolio}>
      <Modal onClose={closeModal} ref={modalRef}>
        <Detail
          title={data?.title}
          repository={data?.repository}
          details={data?.details}
          link={data?.link}
        />
      </Modal>
      <div className={style.section}>
        <h2
          className={classNames(style.title, {
            title_light: !theme,
            title_dark: theme,
          })}
        >
          {words.title}
        </h2>
        <Paragraph theme={theme} indent>
          {words.description}
        </Paragraph>
        <ul
          className={classNames(style.list, {
            dark: !theme,
            [style.listLight]: !theme,
          })}
        >
          <li onClick={() => setCurrentIndex(PROJECTS_CATEGORY.spa)}>
            {words.spa}
          </li>
          <li onClick={() => setCurrentIndex(PROJECTS_CATEGORY.landing)}>
            {words.landing}
          </li>
          <li onClick={() => setCurrentIndex(PROJECTS_CATEGORY.service)}>
            {words.service}
          </li>
          <li onClick={() => setCurrentIndex(PROJECTS_CATEGORY.other)}>
            {words.other}
          </li>
        </ul>
        <div className={style.container}>
          <Fade>
            {text[currentIndex].map(
              (element, index) =>
                images[element.ref] && (
                  <Card
                    key={index}
                    name={element.title}
                    image={images[element.ref]}
                    tech={element.tecnologies}
                    alt={element.title}
                    repository={element.repository}
                    link={element.link}
                    theme={theme}
                  />
                )
            )}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
