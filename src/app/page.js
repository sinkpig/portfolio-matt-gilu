'use client'
import Image from "next/image";
import ArtGrid from '@/components/ArtGrid'
import ModalProvider from '@/components/modal/ModalProvider'
import Title from '@/components/Title'
import { textContent } from "@/data/textContent";
import styles from '@/app/page.module.css'

export default function Home() {
  const t = textContent.home
  return (
    <>
      <main>
        <ArtGrid/>
        <section className={styles.about}>
          <div className={styles.content}>
            <Title text="Hello!!" bgColor="brown" direction="center"/>
            <p>{t.paragraph}</p>
          </div>
          <Image
            alt={t.imageAlt}
            src="/about-section.png"
            width={500}
            height={500}
            loading="lazy"/>
        </section>
      </main>
      <ModalProvider/>
    </>
  );
}
