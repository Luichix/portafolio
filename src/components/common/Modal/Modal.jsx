import React, { forwardRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

const Modal = forwardRef(function ModalRef({ children, onClose }, ref) {
  const handleModalContent = (event) => event.stopPropagation()
  const PortalDiv = document.getElementById('portal')
  return ReactDOM.createPortal(
    <article className={styles.modal} onClick={onClose} ref={ref}>
      <div className={styles.content} onClick={handleModalContent}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </article>,
    PortalDiv
  )
})
export default Modal
