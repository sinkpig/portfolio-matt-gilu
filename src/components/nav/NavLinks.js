import Link from "next/link"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useState, useRef } from "react"
import { textContent } from "@/data/textContent"
import Chevron from "@/components/icons/Chevron"
import Stroke from "@/components/icons/Stroke"
import styles from '@/styles/Nav.module.css'

export default function NavLinks() {
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const t = textContent.info

  const [showTooltip, setShowTooltip] = useState(false)
  const timerRef = useRef(null)

  function copyText() {
    navigator.clipboard.writeText(t.email);

    setShowTooltip(true)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setShowTooltip(false)
    }, 2000)
  }

  return (
    <ul>
      <li className={styles.navItem}>
        Gallery
        <div className={styles.chevron}>
          <Chevron/>
        </div>
        <div className={styles.stroke}>
          <Stroke/>
        </div>
        <div className={styles.dropdown}>
          <ul>
            <li className={`${isActive('/freelance') ? styles.active : ''}`}>
              <Link
                href="/freelance"
                prefetch={false}
              >
                Freelance
              </Link>
            </li>
            <li className={`${isActive('/personal-pieces') ? styles.active : ''}`}>
              <Link
                href="/personal-pieces"
                prefetch={false}
              >
                Personal Pieces
              </Link>
            </li>
            <li className={`${isActive('/sketchbook') ? styles.active : ''}`}>
              <Link
                href="/sketchbook"
                prefetch={false}
              >
                Sketchbook
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={`${styles.navItem} ${isActive('/storyboard') ? styles.active : ''}`}>
        <Link
          prefetch={false}
          href="/storyboard"
        >
          Storyboard
          <div className={styles.stroke}>
            <Stroke/>
          </div>
        </Link>
      </li>
      <li className={`${styles.navItem} ${isActive('/about') ? styles.active : ''}`}>
        <Link
          prefetch={false}
          href="/about"
        >
          About
          <div className={styles.stroke}>
            <Stroke/>
          </div>
        </Link>
      </li>
      <li className={`${styles.navItem} ${styles.emailBtn}`}>
        <button className={styles.tooltipContainer} onClick={copyText}>
          <Image
            src="/social/email-lined.png"
            alt="Email me"
            width={40}
            height={40}
            loading="eager"
          ></Image>
          <span className={`${styles.tooltip} ${showTooltip ? styles.active : ""}`}>
            Email copied<br />to clipboard
          </span>
        </button>
      </li>
    </ul>
  )
}
