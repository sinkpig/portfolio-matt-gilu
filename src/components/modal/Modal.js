import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Modal.module.css'
import Close from '@/components/icons/Close'

export default function Modal({ src, alt }) {
  return (
    <div className={styles.modal}>
      <Link
        href="/"
        className={styles.close}
        scroll={false}
      >
        <Close/>
      </Link>
      <Image src={src} alt={alt} fill={true} />
    </div>
  )
}
