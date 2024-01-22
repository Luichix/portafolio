import React from 'react'
import { FaInfoCircle, FaLink } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import styles from './styles.module.css'
import classNames from 'classnames'

interface CardProps {
  name: string
  link: string
  repository: string
  image: string
  alt: string
  tech: string[]
  theme: boolean
  textCode: string
  textProject: string
}

const Card = ({
  name,
  link,
  image,
  tech,
  alt,
  repository,
  theme,
  textCode,
  textProject,
}: CardProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <h4
          className={classNames(styles.name, {
            textLight: !theme,
            textDark: theme,
          })}
        >
          {name}
        </h4>
      </div>
      <figure className={styles.figure}>
        <img src={image} className={styles.image} alt={alt} />
      </figure>
    </div>
  )
}

export default Card
