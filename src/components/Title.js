import styles from '@/styles/Title.module.css'

export default function Title({ text, tag: Tag = 'p', bgColor }) {
  const classes = [
    bgColor && styles[bgColor],
    styles.title
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes || undefined}>{text}</Tag>
  )
}
