'use client'
import Image from "next/image";
import Link from "next/link";
import styles from '@/app/about/page.module.css'
import Title from '@/components/Title'
import { textContent } from '@/data/textContent';

export default function About() {
  const t = textContent.about
  return (
    <>
      <main className={styles.about}>
        <Image src={t.src} alt={t.imageAlt} width={600} height={600} loading="eager"/>
        <div className={styles.container}>
          <Title text={t.title} bgColor="orange"/>
          <p>{t.paragraph}</p>
          <Title tag="p" bgColor="lightestBlue">
            <Link href={t.link} download>{t.linkText}</Link>
          </Title>
        </div>
      </main>
    </>
  );
}
