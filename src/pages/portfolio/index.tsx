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
import Title from '@Components/common/Title'
import Container from '@Components/layout/Container'
import Slide, { Category, SlidesRecord } from '@Components/common/Slide'

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

  const slides: SlidesRecord[] = [
    { slide: 'spa', label: words.spa },
    { slide: 'landing', label: words.landing },
    { slide: 'service', label: words.service },
    { slide: 'other', label: words.other },
  ]

  const onSelectSlide = (slide: Category) => {
    setCurrentIndex(slide)
  }

  return (
    <Container id="portfolio">
      <Modal onClose={closeModal} ref={modalRef}>
        <Detail
          title={data?.title}
          repository={data?.repository}
          details={data?.details}
          link={data?.link}
        />
      </Modal>
      <div className={style.section}>
        <Title theme={theme}>{words.title}</Title>
        <Paragraph theme={theme} indent>
          {words.description}
        </Paragraph>
        <Slide slides={slides} handleSlide={onSelectSlide} theme={theme} />
      </div>
      <div className={style.container}>
        <Fade className={style.fade}>
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
                  textCode={words.goCode}
                  textProject={words.goProject}
                />
              )
          )}
        </Fade>
      </div>
    </Container>
  )
}

export default Portfolio
