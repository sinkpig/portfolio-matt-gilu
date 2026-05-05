import styles from '@/styles/Title.module.css'

export default function Title({ text, tag: Tag = 'p', bgColor, direction = 'left', className }) {
  const classes = [
    bgColor && styles[bgColor],
    direction && styles[direction],
    styles.title,
    className
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes || undefined}>{text}</Tag>
  )
}
