import classNames from 'classnames'
import styles from './styles.module.css'

const Title = ({ theme, children }: { theme: boolean; children: string }) => {
  return (
    <h2
      className={classNames(styles.title, {
        title_light: !theme,
        title_dark: theme,
      })}
    >
      {children}
    </h2>
  )
}

export default Title
