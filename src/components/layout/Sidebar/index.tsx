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
import { HiArrowCircleUp } from 'react-icons/hi'
import style from './styles.module.css'
import classNames from 'classnames'
import { LanguageContext, ThemeContext } from '@Contexts/index'

/* ------------------------------- interfaces ------------------------------- */

interface ScrollProps {
  scrollToTop: (event: any) => void
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

export function Sidebar({
  toggle,
  setToggle,
}: {
  toggle: boolean
  setToggle: (bool: boolean) => void
}) {
  /* ------------------------------ text content ------------------------------ */

  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const text = lang[language]

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
        [style.bgLight]: !theme,
        [style.bgDark]: theme,
      })}
    >
      <Scroll scrollToTop={scrollToTop} ref={scrollRef} />
      <div
        className={classNames(style.container, {
          [style.bgLight]: !theme,
          [style.bgDark]: theme,
        })}
      >
        <div className={style.profile}>
          <img src={perfil} alt="Imagen de perfil" className={style.image} />
          <div className={style.group}>
            <h2 className={style.title}>
              <a href="#">Luichix</a>
            </h2>
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
                    offset={-50}
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
