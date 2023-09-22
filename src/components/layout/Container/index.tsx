import { ReactNode } from 'react'
import styles from './styles.module.css'

const Container = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>
}

export default Container
