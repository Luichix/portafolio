import React from 'react'
import { FaGithub, FaInfoCircle, FaLink } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import styles from './styles.module.css'
import classNames from 'classnames'
import { TbWorld } from 'react-icons/tb'

interface CardProps {
  index: number
  name: string
  image: string
  alt: string
  theme: boolean
  onClick: (element: number) => void
}

const Card = ({ index, name, image, alt, theme, onClick }: CardProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.item, {
          [styles.bgDark]: theme,
          [styles.bgLight]: !theme,
        })}
        onClick={() => onClick(index)}
      >
        <h4
          className={classNames(styles.name, {
            textLight: !theme,
            textDark: theme,
          })}
        >
          {name}
        </h4>
        <figure className={styles.figure}>
          <img src={image} className={styles.image} alt={alt} />
        </figure>
      </div>
    </div>
  )
}

export default Card
