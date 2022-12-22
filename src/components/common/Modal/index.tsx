import React, { forwardRef, PropsWithChildren, PropsWithRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

interface ModalProps extends PropsWithChildren {
  onClose: (event: any) => void
}

const Modal = forwardRef<PropsWithRef<HTMLElement>, ModalProps>(
  function ModalRef({ children, onClose }: ModalProps, ref) {
    const handleModalContent = (event: any) => event.stopPropagation()
    const PortalDiv = document.getElementById('portal')!
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
  }
)

export default Modal
