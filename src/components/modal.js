import React from 'react'
import style from '../css/module/modal.module.css'

function Modal ({ active, setActive, children }) {
  const closeModal = () => {
    if(active) setActive(false)
    else setActive(true)
  }
  const handleModalContent = e => e.stopPropagation()

  return (
    <article id="myModal" className={active? style.modal : style.offModal} onClick={closeModal}>
      <div className={style.content} onClick={handleModalContent}>
        <button className={style.close} onClick={closeModal}>&times;</button>
        {children}
      </div>
    </article>
  )
}

export default Modal