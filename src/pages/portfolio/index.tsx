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
const images = {
  App1,
  Quesos,
  Elina,
  Amazon,
  Barbershop,
  Portafolio,
  GoDigit,
  Nomina,
  Sforza,
  Storybook,
  Calendar,
  Chat,
} as any

export function Portfolio() {
  const { language } = useContext(LanguageContext)
  const text = content[language]
  const [data, setData] = useState('')
  const modalRef = useRef<HTMLElement | null>(null)

  const openModal = (e: any) => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
    setData(e)
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }

  return (
    <section id="portfolio" className={style.portfolio}>
      <Modal onClose={closeModal} ref={modalRef}>
        <h4 className={style.title}>{data[0]}</h4>
        <p className={style.text}>{data[3]}</p>
        <a
          className={style.link}
          href={data[2]}
          target="_blank"
          rel="noreferrer"
        >
          Ver Mas
        </a>
      </Modal>
      <div className={style.section}>
        <h2 className={style.title}>Portafolio</h2>
        <div className={style.container}>
          <Fade>
            {text.map((e, i) => (
              <div key={i} className={style.item}>
                <h4>{e[0]}</h4>
                <img
                  src={images[e[1]]}
                  className={style.image}
                  alt={e[0]}
                ></img>
                <div className={style.links}>
                  <a onClick={() => openModal(e)}>
                    <i>
                      <FcInfo />
                    </i>
                  </a>
                  <a href={e[2]} target="_blank" rel="noreferrer">
                    <i>
                      <FcLink />
                    </i>
                  </a>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
