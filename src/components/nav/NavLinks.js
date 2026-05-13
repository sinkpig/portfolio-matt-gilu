import Link from "next/link"
import { usePathname } from 'next/navigation'
import Chevron from "@/components/icons/Chevron"
import Stroke from "@/components/icons/Stroke"
import styles from '@/styles/Nav.module.css'

export default function NavLinks() {
  const pathname = usePathname()
  const isActive = (path) => pathname === path

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
            <li>
              <Link
                href="/freelance"
                prefetch={false}
              >
                Freelance
              </Link>
            </li>
            <li>
              <Link
                href="/personal-pieces"
                prefetch={false}
              >
                Personal Pieces
              </Link>
            </li>
            <li>
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
    </ul>
  )
}
