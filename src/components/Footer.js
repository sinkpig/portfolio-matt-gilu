'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.title}>Get to know me</p>
        <p className="subtitle">Check out my socials and follow me!</p>
      </div>
      <div className={styles.container}>
        { socialLinks.map((i) => (
          <address key={i.title}>
            {console.log(encodeURIComponent(i.subject))}
            <Link
              href={
                i.title === 'email'
                  ? `mailto:${i.src}?subject=${encodeURIComponent(i.subject)}`
                  : i.title === 'whatsapp'
                    ? `${i.src}?text=${encodeURIComponent(i.subject)}`
                    : i.src
              }
              target={i.title === 'email' ? '_self' : '_blank'}
            >
              <Image
                alt={`${i.title} icon`}
                src={i.image}
                width={40}
                height={40}
              />
            </Link>
          </address>
        )) }
      </div>
    </footer>
  )
}
