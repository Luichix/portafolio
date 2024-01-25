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
import Livechat from '@Assets/img/livechat.jpeg'
import Nomina from '@Assets/img/nomina.png'
import Calendar from '@Assets/img/calendar.png'
import Medical from '@Assets/img/medical.png'
import FinancialWeb from '@Assets/img/financial_web.png'
import FinancialServer from '@Assets/img/financial_server.png'
import { ThemeContext } from '@Contexts/theme'
import Paragraph from '@Components/common/Paragraph'
import Title from '@Components/common/Title'
import Container from '@Components/layout/Container'

const images = {
  Medical,
  Elina,
  GoDigit,
  Livechat,
  Nomina,
  FinancialWeb,
  FinancialServer,
  // Quesos,
  // Nicafest,
  // Barbershop,
  // Calendar,
} as any

interface Project {
  title: string
  repository: string
  details: Record<string, string>[]
  link: string
  ref: string
  tecnologies: string[]
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

  return (
    <Container id="portfolio" type="separated">
      <Modal onClose={closeModal} ref={modalRef}>
        <Detail
          title={data?.title}
          repository={data?.repository}
          details={data?.details}
          link={data?.link}
        />
      </Modal>
      <div>
        <div className={style.section}>
          <Title theme={theme}>{words.title}</Title>
          <Paragraph theme={theme} indent>
            {words.description}
          </Paragraph>
        </div>
        {text.length === 0 && (
          <Fade>
            <div>
              <Paragraph theme={theme} center>
                {words.empty}
              </Paragraph>
            </div>
          </Fade>
        )}
        <div className={style.container}>
          <Fade className={style.fade}>
            {text.map(
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
      </div>
    </Container>
  )
}

export default Portfolio
