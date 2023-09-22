import {
  forwardRef,
  PropsWithRef,
  useContext,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
} from 'react'
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import lang from '@Language/sidebar.json'
import perfil from '@Assets/img/perfil.png'
import { GoHome, GoPerson, GoProject, GoMail } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiCode, HiArrowCircleUp } from 'react-icons/hi'
import style from './styles.module.css'
import classNames from 'classnames'
import { LanguageContext } from '@Contexts/index'

/* ------------------------------- interfaces ------------------------------- */

interface ModalProps extends PropsWithChildren {
  onToggle: (event: any) => void
}
interface ScrollProps {
  scrollToTop: (event: any) => void
}

/* ---------------------------- extra components ---------------------------- */

function Menu({ children, onToggle }: ModalProps) {
  const PortalMenu = document.getElementById('menu')!
  return ReactDOM.createPortal(
    <button onClick={onToggle} type="button" className={style.toggle}>
      {children}
    </button>,
    PortalMenu
  )
}
const Scroll = forwardRef<PropsWithRef<HTMLAnchorElement>, ScrollProps>(
  function ScrollButton({ scrollToTop }: ScrollProps, ref) {
    const PortalScroll = document.getElementById('scroll')!
    return ReactDOM.createPortal(
      <a onClick={scrollToTop} className={style.back} ref={ref}>
        <i>
          <HiArrowCircleUp />
        </i>
      </a>,
      PortalScroll
    )
  }
)

/* ----------------------------- other elements ----------------------------- */

type Links = 'home' | 'about' | 'skills' | 'portfolio' | 'contact'

const elements = ['home', 'about', 'skills', 'portfolio', 'contact'] as Links[] // 'skills',

const icons = [
  <GoHome key="home" />,
  <GoPerson key="person" />,
  <GiSkills key="file" />,
  <GoProject key="project" />,
  <GoMail key="mail" />,
]

/* --------------------------------- Sidebar -------------------------------- */

export function Sidebar() {
  /* ------------------------------ text content ------------------------------ */

  const { language } = useContext(LanguageContext)
  const text = lang[language]

  /* ----------------------------- toggle sidebar ----------------------------- */

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    if (toggle) setToggle(false)
    else setToggle(true)
  }

  /* -------------------------- button scroll to top -------------------------- */

  const scrollRef = useRef<HTMLAnchorElement | null>(null)
  const [offset, setOffset] = useState(0)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (offset > 500) {
    if (scrollRef?.current) scrollRef.current.style.opacity = '1'
  } else {
    if (scrollRef?.current) scrollRef.current.style.opacity = '0'
  }

  /* ----------------------------------- jsx ---------------------------------- */
  return (
    <header
      id="header"
      className={classNames(style.sidenav, {
        [style.show]: toggle,
      })}
    >
      <Menu onToggle={handleToggle}>
        <i>{toggle ? <HiMenu /> : <HiCode />}</i>
      </Menu>
      <Scroll scrollToTop={scrollToTop} ref={scrollRef} />
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
                    onClick={() => setToggle(false)}
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
