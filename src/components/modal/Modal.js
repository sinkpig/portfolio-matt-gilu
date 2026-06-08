'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Modal.module.css'
import Close from '@/components/icons/Close'
import { textContent } from "@/data/textContent";

export default function Modal({ src, alt, href }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={styles.modal}>
      <Link
        href={href}
        className={styles.close}
        scroll={false}
      >
        <Close/>
      </Link>

      {isLoading && (
        <Loading/>
      )}

      <Image
        src={src}
        alt={alt}
        fill={true}
        onLoad={() => setIsLoading(false)} />
    </div>
  )
}

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingContent}>
        <span>{textContent.loading}</span>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
