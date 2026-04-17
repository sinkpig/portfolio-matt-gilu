'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from '@/styles/Nav.module.css'
import Logo from '@/components/icons/Logo'
import Chevron from "@/components/icons/Chevron"
import Stroke from "@/components/icons/Stroke"

export default function Nav() {
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  return (
    <nav className={styles.nav}>
      <Link prefetch={false} href="/" className={styles.logo}>
        <Logo/>
      </Link>

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
      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:Rd6:"
        data-state="closed"
      >
        <div className="w-html-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
            width="100%"
            height="100%"
            style={{display: 'block'}}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"
            />
          </svg>
        </div>
      </button>
    </nav>
  )
}
