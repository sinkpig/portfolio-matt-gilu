"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Art.module.css'
import { usePathname } from 'next/navigation'

export default function Art({src, alt = 'Art image', position}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <Link
      href={`${pathname}?show=true&src=${encodeURIComponent(src)}&alt=${encodeURIComponent(alt)}`}
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
        className={styles[position]}
      />
    </Link>
  )
}
