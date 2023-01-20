import { useState, useRef, useContext } from 'react'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import content from '@Language/portfolio.json'
import { LanguageContext } from '@Contexts/language'
import App1 from '@Assets/img/app1.png'
import Quesos from '@Assets/img/quesos.png'
import Elina from '@Assets/img/elina.png'
import Amazon from '@Assets/img/amazon.png'
import Barbershop from '@Assets/img/barbershop.png'
import Portafolio from '@Assets/img/portafolio.png'
import GoDigit from '@Assets/img/godigit.png'
import Nomina from '@Assets/img/nomina.png'
import Modal from '@Components/common/Modal'
import Sforza from '@Assets/img/sforza.png'
import Storybook from '@Assets/img/storybook.png'
import Calendar from '@Assets/img/calendar.png'
import Chat from '@Assets/img/chat.jpg'
import Card from '@Components/custom/Card'
import Detail from '@Components/custom/Detail'
const images = {
  // App1,
  Quesos,
  // Elina,
  // Amazon,
  // Barbershop,
  Portafolio,
  // GoDigit,
  // Nomina,
  Sforza,
  // Storybook,
  // Calendar,
  // Chat,
} as any

interface Project {
  title: string
  repository: string
  details: Record<string, string>[]
  link: string
  ref: string
}

export function Portfolio() {
  const { language } = useContext(LanguageContext)
  const text = content[language]
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
        <h2 className={style.title}>Portafolio</h2>
        <div className={style.container}>
          <Fade>
            {text.map(
              (element, index) =>
                images[element.ref] && (
                  <Card
                    key={index}
                    name={element.title}
                    image={images[element.ref]}
                    alt={element.title}
                    repository={element.repository}
                    link={element.link}
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