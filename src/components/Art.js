"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Art.module.css'
import { usePathname } from 'next/navigation'

export default function Art({src, alt, loading}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

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
        loading={`${isHome ? 'eager' : 'lazy'}`}
      />
    </Link>
  )
}
