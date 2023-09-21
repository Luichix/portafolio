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
}

const Card = ({
  name,
  link,
  image,
  tech,
  alt,
  repository,
  theme,
}: CardProps) => {
  return (
    <div className={styles.item}>
      {/* <div className={styles.tech}>
        {tech.map((element, index) => (
          <span key={index}>{element}</span>
          ))}
        </div> */}
      <figure className={styles.figure}>
        <img src={image} className={styles.image} alt={alt} />
      </figure>
      <h4
        className={classNames(styles.name, {
          light: !theme,
          dark: theme,
        })}
      >
        {name}
      </h4>
      <div className={styles.info}>
        <div className={styles.links}>
          <a href={repository} target="_blank" rel="noreferrer">
            <BsGithub /> &nbsp; Ir al codigo
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <FaLink />
            &nbsp; Ir al proyecto
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
