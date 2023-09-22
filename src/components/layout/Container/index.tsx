import { ReactNode } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

const Container = ({
  id,
  type = 'center',
  children,
}: {
  id: string
  type?: 'center' | 'separated'
  children: ReactNode
}) => {
  return (
    <section id={id} className={classNames(styles.container, styles[type])}>
      {children}
    </section>
  )
}

export default Container
