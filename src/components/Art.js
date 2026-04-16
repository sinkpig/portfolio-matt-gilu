import styles from '@/styles/Art.module.css'
import Image from 'next/image'

export default function Art(props) {
  return (
    <>
      <div className={styles.artContainer}>
        <Image
          alt="Image"
          width={400}
          height={260}
          {...props}
        />
      </div>
    </>
  )
}
