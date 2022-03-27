import React, { useState } from 'react'
import { FcInfo, FcLink } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import style from '../css/module/portfolio.module.css'
import { task } from '../data/info'
import Modal from './modal'
import styleModal from '../css/module/modal.module.css'

function OpenModal (data, active, setActive){
  return(
    <>
      <Modal active={active} setActive={setActive}>
        <h4 className={styleModal.title}>{data[0]}</h4>
        <p className={styleModal.text} >{data[3]}</p>
        <a className={styleModal.link} href={data[2]} target="_blank" rel="noreferrer"> Ver Mas</a>
      </Modal>
    </>
  )
}

function Portfolio() {
  const [onModal, setOnModal] = useState(false)
  const [data, setData] = useState(null)

  const handleModal = (e) => {
    if(onModal)setOnModal(false)
    else setOnModal(true)
    setData(e)
  }

  return (
    <>
      {onModal && OpenModal(data, onModal, setOnModal)}
      <section id='Portafolio' className={style.portfolio}>
        <h2 className={style.title}>Portafolio</h2>
        <div className={style.container}>
          <Fade bottom>
            {task.map((e,i) => (
              <div key={i} className={style.item}>
                <h4>{e[0]}</h4>
                <img src={e[1]} className={style.image} alt={e[0]}></img>
                <div className={style.links}>
                  <a onClick={( ) => handleModal(e)} ><i><FcInfo/></i></a>
                  <a href={e[2]} target="_blank" rel="noreferrer">
                    <i><FcLink/></i>
                  </a>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Portfolio
