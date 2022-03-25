import React from 'react'
import style from '../css/module/footer.module.css'
import { HiArrowCircleUp } from 'react-icons/hi'

function Footer () {
  return (
    <>
      <footer id="footer" className={style.footer}>
        <div className={style.credits}>
          <p>Copyright &copy; 2021</p>
          <p>Diseñado por: <a href="https://www.instagram.com/luichix_rex/" target="_blank" rel="noreferrer">Luis Reynaldo</a></p>
        </div>
      </footer>
      <a href="#" className={style.back}><i><HiArrowCircleUp/></i></a>
    </>
  )
}

export default Footer
