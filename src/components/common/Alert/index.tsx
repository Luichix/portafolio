import React, { forwardRef, PropsWithRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'
import classNames from 'classnames'
import { ImFire } from 'react-icons/im'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { SiCheckmarx } from 'react-icons/si'
import { TiWarning } from 'react-icons/ti'

export type AlertType = 'error' | 'info' | 'success' | 'warning' | 'none'

export interface AlertProps {
  message: string
  alert: AlertType
  show: boolean
}

export const Alert = forwardRef<PropsWithRef<HTMLDivElement>, AlertProps>(
  function AlertRef({ message, alert, show }: AlertProps, ref) {
    const PortalDiv = document.getElementById('portal')!

    return ReactDOM.createPortal(
      <div
        ref={ref}
        className={classNames(styles.alert, {
          [styles.show]: show,
          [styles.hidden]: !show,
        })}
      >
        <div className={classNames(styles.icon, styles[`${alert}Icon`])}>
          {alert === 'error' && <ImFire />}
          {alert === 'info' && <BsFillInfoSquareFill />}
          {alert === 'success' && <SiCheckmarx />}
          {alert === 'warning' && <TiWarning />}
        </div>
        <div className={classNames(styles.message, styles[`${alert}Message`])}>
          {message}
        </div>
      </div>,
      PortalDiv
    )
  }
)
