import styles from '@/styles/Title.module.css'

export default function Title({ text, tag: Tag = 'h1', bgColor, direction = 'left', className, children }) {
  const classes = [
    bgColor && styles[bgColor],
    direction && styles[direction],
    styles.title,
    className
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes || undefined}>{children || text}</Tag>
  )
}
