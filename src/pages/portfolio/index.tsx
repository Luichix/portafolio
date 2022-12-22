import React, { useState, useRef } from 'react'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from './styles.module.css'
import { task } from '../../data/info'
// import Modal from '../common/Modal'

export function Portfolio() {
  const modalRef = useRef(null)
  const [onModal, setOnModal] = useState(false)
  const [data, setData] = useState(null)
  console.log(data)
  const handleModal = (e) => {
    if (onModal) {
      modalRef.current.style.display = 'none'
      setOnModal(false)
    } else {
      modalRef.current.style.display = 'flex'
      setOnModal(true)
      setData(e)
    }
  }

  return (
    <section id="Portafolio" className={style.portfolio}>
      {/* <Modal onClose={handleModal} ref={modalRef}>
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
      </Modal> */}
      <div className={style.section}>
        <h2 className={style.title}>Portafolio</h2>
        <div className={style.container}>
          <Fade bottom>
            {task.map((e, i) => (
              <div key={i} className={style.item}>
                <h4>{e[0]}</h4>
                <img src={e[1]} className={style.image} alt={e[0]}></img>
                <div className={style.links}>
                  <a onClick={() => handleModal(e)}>
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
