import style from './styles.module.css'
import perfil from '../../../assets/img/perfil.png'
import { GoFile, GoHome, GoPerson, GoProject, GoMail } from 'react-icons/go'
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import { LanguageContext } from '@Contexts/language'
import { useContext, useState } from 'react'
import lang from '@Language/sidebar.json'

import { HiMenu, HiCode } from 'react-icons/hi'
import { HiArrowCircleUp } from 'react-icons/hi'

type Links = 'home' | 'about' | 'skills' | 'portfolio' | 'contact'

const elements = ['home', 'about', 'skills', 'portfolio', 'contact'] as Links[]

const icons = [
  <GoHome key="home" />,
  <GoPerson key="person" />,
  <GoFile key="file" />,
  <GoProject key="project" />,
  <GoMail key="mail" />,
]

export function Sidebar() {
  const [toggle, setToggle] = useState(false)
  const { language } = useContext(LanguageContext)
  const text = lang[language]

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const handleToggle = () => {
    if (toggle) setToggle(false)
    else setToggle(true)
  }

  return (
    <header id="header" className={style.sidenav}>
      {/* <button onClick={handleToggle} type="button" className={style.toggle}>
        <i>{toggle ? <HiMenu /> : <HiCode />}</i>
      </button>
      <a onClick={scrollToTop} className={style.back}>
        <i>
          <HiArrowCircleUp />
        </i>
      </a> */}
      <div className={style.container}>
        <div className={style.profile}>
          <img src={perfil} alt="Imagen de perfil" className={style.image} />
          <div className={style.group}>
            <h1 className={style.title}>
              <a href="index.html">Luichix</a>
            </h1>
            <div className={style.social}>
              <a
                href="https://github.com/Luichix"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/luisreynaldopch"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:luichix.rex@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaMailBulk />
              </a>
            </div>
          </div>
          <nav className={style.menu}>
            <ul>
              {elements.map((item: Links, index) => (
                <li key={index}>
                  <Link
                    className={style.link}
                    activeClass={style.active}
                    to={item}
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={0}
                    duration={1500}
                  >
                    <i>{icons[index]}</i>
                    <span>{text[item]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Sidebar
