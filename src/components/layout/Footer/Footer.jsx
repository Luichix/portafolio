import React from 'react'
import style from './footer.module.css'

function Footer() {
  return (
    <>
      <footer id="footer" className={style.footer}>
        <div className={style.credits}>
          <p>Copyright &copy; 2022</p>
          <p>
            Diseñado por:{' '}
            <a
              href="https://www.instagram.com/luichix_rex/"
              target="_blank"
              rel="noreferrer"
            >
              Luis Reynaldo
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
