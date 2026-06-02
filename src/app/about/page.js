import Image from "next/image";
import styles from '@/app/about/page.module.css'
import { textContent } from '@/data/textContent';
import { getPageBySlug } from '@/lib/wordpress';
import WordPressContent from '@/components/WordPressContent';

export default async function About() {
  const page = await getPageBySlug('about');
  const contentHTML = page?.content?.rendered ?? '';

  const t = textContent.about
  return (
    <>
      <main className={styles.about}>
        <Image src={t.src} alt={t.imageAlt} width={600} height={600} loading="eager"/>
        <div className={styles.container}>
          <WordPressContent html={contentHTML} />
        </div>
      </main>
    </>
  );
}
