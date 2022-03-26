import React, { useState } from 'react'
import { social, elements, icons } from '../data/info'
import style from '../css/module/header.module.css'
import perfil from '../assets/img/perfil.jpg'
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiCode } from 'react-icons/hi'
import { Link } from 'react-scroll'


function Header() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    if(toggle) setToggle(false)
    else setToggle(true)
  }

  return (
    <>

      <header id="header" className={toggle ? style.header : style.mobile} >
        <div className={style.container} >
          <div className={style.profile} >
            <img src={perfil} alt="Imagen de perfil" className={style.image}/>
            <h1 className={style.title}>
              <a href="index.html">Luis Reynaldo</a>
            </h1>
            <div className={style.social}>
              <a href={social.github} target="_blank" rel="noreferrer"><i><FaGithub/></i></a>
              <a href={social.twitter} target="_blank" rel="noreferrer"><i><FaTwitter/></i></a>
              <a href={social.whatsapp} target="_blank" rel="noreferrer"><i><FaWhatsapp/></i></a>
              <a href={social.linkedin} target="_blank" rel="noreferrer"><i><FaLinkedin/></i></a>
              <a href={social.email} target="_blank" rel="noreferrer"><i><FaMailBulk/></i></a>
            </div>
          </div>
          <nav className={style.menu} >
            <ul>
              {elements.map((e,i) => (
                <li key={i}>
                  <Link
                    className={style.link}
                    activeClass={style.active}
                    to={e}
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={0}
                    duration={1500}>
                    <i>{icons[i]}</i>
                    <span>{e}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <button onClick={handleToggle} type="button" className={style.toggle}><i>{toggle ? <HiMenu/> : <HiCode/>}</i></button>
    </>
  )
}
export default Header
