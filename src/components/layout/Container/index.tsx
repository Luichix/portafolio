import { ReactNode } from 'react'
import styles from './styles.module.css'

const Container = ({ id, children }: { id: string; children: ReactNode }) => {
  return (
    <section id={id} className={styles.container}>
      {children}
    </section>
  )
}

export default Container
