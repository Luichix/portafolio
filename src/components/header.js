import React from 'react'
import perfil from '../assets/img/perfil.jpg'
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { GoFile, GoHome, GoPerson, GoProject } from 'react-icons/go'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src={perfil}
            alt="Imagen de perfil"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="index.html">Luis Reynaldo</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://github.com/Luichix"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FaGithub />
              </i>
            </a>
            <a
              href="https://twitter.com/Luichix_Rex"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FaTwitter />
              </i>
            </a>
            <a
              href="https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FaWhatsapp />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/luisreynaldopch"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a
              href="mailto:luichix.rex@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FaMailBulk />
              </i>
            </a>
          </div>
        </div>
        {/* Nav Menu */}
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <Link
                className="nav-menu-link"
                activeClass="active"
                to="hero"
                spy={true}
                smooth="easeInOutQuint"
                offset={0}
                duration={1500}
              >
                <i>
                  <GoHome />
                </i>
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-menu-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth="easeInOutQuint"
                offset={0}
                duration={1500}
              >
                <i>
                  <GoPerson />
                </i>
                <span>Sobre mi</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-menu-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth="easeInOutQuint"
                offset={0}
                duration={1500}
              >
                <i>
                  <GoFile />
                </i>
                <span>Estudios</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-menu-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth="easeInOutQuint"
                offset={0}
                duration={1500}
              >
                <i>
                  <GoProject />
                </i>
                <span>Portafolio</span>
              </Link>
            </li>
            {/* <li>
          <Link
            className="nav-menu-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth='easeInOutQuint'
            offset={0}
            duration={1500}
          >
            <i><GoMail/></i><span>Contacto</span>
          </Link>
        </li> */}
          </ul>
        </nav>

        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i>
            <HiMenu />
          </i>
        </button>
      </div>
    </header>
  )
}
export default Header
