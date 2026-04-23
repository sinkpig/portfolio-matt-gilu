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
      <li className={styles.navItem}>
        <Link
          prefetch={false}
          href="/storyboard"
          className="w-element-15"
          id="radix-:R96:-trigger-1"
          data-state="closed"
          aria-expanded="false"
          aria-controls="radix-:R96:-content-1"
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
          className="w-element-16"
          id="radix-:R96:-trigger-2"
          data-state="closed"
          aria-expanded="false"
          aria-controls="radix-:R96:-content-2"
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
