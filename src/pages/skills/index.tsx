import styles from './styles.module.css'
import { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext, LanguageContext } from '@Contexts/index'
import data from '@Language/skills.json'
import { USING_STACK, OTHER_STACK, LEARNING_STACK } from '@Services/stack'
import tecnologies from '@Language/stack.json'
const Skills = () => {
  const { language } = useContext(LanguageContext)

  const { theme } = useContext(ThemeContext)
  const text = data[language]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h3
          className={classNames(styles.title, {
            title_light: !theme,
            title_dark: theme,
          })}
        >
          {text.title}
        </h3>
        <div
          className={classNames(styles.stack, {
            text_light: !theme,
            text_dark: theme,
          })}
        >
          <p className={styles.category}>{text.description}</p>
          <span className={styles.category}>{text.using}</span>
          <Stack list={tecnologies.using} stack={USING_STACK} />
          <span className={styles.category}>{text.learning}</span>
          <Stack list={tecnologies.learning} stack={LEARNING_STACK} />
          <span className={styles.category}>{text.other}</span>
          <Stack list={tecnologies.other} stack={OTHER_STACK} />
        </div>
      </div>
    </section>
  )
}

export default Skills

const Stack = ({
  list,
  stack,
}: {
  list: { element: string; domain: string }[]
  stack: string[]
}) => {
  return (
    <ul className={styles.group}>
      {list.map(({ element, domain }, index) => (
        <li key={index}>
          <img src={stack[index]} />
          <span>{element}</span>
          {/* <span>{domain}</span> */}
        </li>
      ))}
    </ul>
  )
}
