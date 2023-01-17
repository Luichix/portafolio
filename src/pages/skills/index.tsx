import styles from './styles.module.css'
import tech from '@Language/skills.json'
import { relative } from 'path'
import Graphic from '@Components/custom/Graphic'
import { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlePrevClick = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(tech.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex + 1 === tech.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h3 className={styles.title}>Habilidades</h3>
        <div className={styles.carousel}>
          <div className={styles.item}>
            <div className={styles.head}>
              <button className={styles.button} onClick={handlePrevClick}>
                <HiArrowLeft />
              </button>
              <h4>{tech[currentIndex].title}</h4>
              <button className={styles.button} onClick={handleNextClick}>
                <HiArrowRight />
              </button>
            </div>
            <div className={styles.tech}>
              <div className={styles.element}>
                {tech[currentIndex].list.map((element, index) => (
                  <Graphic
                    key={index}
                    alt={element.alt}
                    src={element.src}
                    score={element.score}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
