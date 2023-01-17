import React from 'react'
import styles from './styles.module.css'
import { BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

interface DetailProps {
  title?: string
  details?: Record<string, string>[]
  repository?: string
  link?: string
}

const Detail = ({ title, repository, details = [], link }: DetailProps) => {
  const Item = ({ label, value }: { label: string; value: string }) => {
    return (
      <div className={styles.detail}>
        <p>
          <span>{label}:</span>&nbsp; {value}
        </p>
      </div>
    )
  }

  return (
    <div className={styles.details}>
      <div className={styles.header}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.links}>
          <a
            className={styles.link}
            href={repository}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <TbWorld />
          </a>
        </div>
      </div>
      {details.map((item, index) => (
        <Item key={index} label={item.label} value={item.value} />
      ))}
    </div>
  )
}

export default Detail
