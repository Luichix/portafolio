import React from 'react'
import { FaInfoCircle, FaLink } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import styles from './styles.module.css'

interface CardProps {
  name: string
  link: string
  repository: string
  image: string
  alt: string
}

const Card = ({ name, link, image, alt, repository }: CardProps) => {
  return (
    <div className={styles.item}>
      <figure className={styles.figure}>
        <img src={image} className={styles.image} alt={alt}></img>
        <div className={styles.info}>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.links}>
            <a href={repository} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <FaLink />
            </a>
          </div>
        </div>
      </figure>
    </div>
  )
}

export default Card
