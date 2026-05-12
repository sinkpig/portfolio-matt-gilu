'use client'
import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import styles from '@/styles/Nav.module.css'
import Logo from '@/components/icons/Logo'
import Burger from '@/components/icons/Burger'
import NavLinks from "@/components/nav/NavLinks"
import Close from '@/components/icons/Close'

export default function Nav() {
  const [active, setActive] = useState(false)
  const pathname = usePathname()

  function handleClick() {
    setActive(!active)
  }

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <nav className={styles.nav}>
        <Link prefetch={false} href="/" className={styles.logo}>
          <Logo/>
        </Link>

        <NavLinks/>

        <button
          type="button"
          className={styles.toggle}
          aria-haspopup="dialog"
          aria-expanded={active}
          data-state={active ? 'open' : 'closed'}
          onClick={handleClick}
        >
          <Burger/>
        </button>
      </nav>
      <div
        className={`${styles.sideNav} ${active ? styles.active : ''}`}
        role="dialog"
      >
        <div className={styles.container}>
          <button type="button" onClick={handleClick}>
            <Close/>
          </button>
          <NavLinks/>
        </div>
      </div>
    </>
  )
}
