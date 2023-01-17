import React from 'react'
import styles from './styles.module.css'

interface GraphicProps {
  alt: string
  src: string
  score: number
}

const Graphic = ({ alt, src, score }: GraphicProps) => {
  return (
    <div className={styles.item}>
      <img src={src} alt={alt} />
      <div className={styles.scores}>
        <span
          style={{
            width: `${score * 10}%`,
            height: '4px',
            backgroundColor: '#94c0e8',
            position: 'relative',
            zIndex: 100,
            alignSelf: 'center',
          }}
          className={styles.bar}
        ></span>
        <span className={styles.score} />
      </div>
    </div>
  )
}

export default Graphic
