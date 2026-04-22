import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Art.module.css'

export default function Art({src, alt}) {
  return (
    <Link
      href={`/?show=true&src=${encodeURIComponent(src)}`}
      className={styles.artContainer}
      scroll = {false}
    >
      <Image
        width={400}
        height={260}
        src={src}
        alt={alt}
        unoptimized={src.endsWith('.gif')}
      />
    </Link>
  )
}
