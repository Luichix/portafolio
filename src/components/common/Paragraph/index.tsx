import classNames from 'classnames'
import styles from './styles.module.css'

interface ParagraphProps {
  theme: boolean
  children: string
  indent?: boolean
  center?: boolean
}

const Paragraph = ({
  theme,
  indent = false,
  center = false,
  children,
}: ParagraphProps) => {
  return (
    <p
      className={classNames(styles.paragraph, {
        text_light: !theme,
        text_dark: theme,
        [styles.indent]: indent,
        [styles.center]: center,
      })}
    >
      {children}
    </p>
  )
}

export default Paragraph
