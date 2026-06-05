import styles from '@/app/about/page.module.css'
import { getPageBySlug } from '@/lib/wordpress'
import { parseWordPressHTML } from '@/lib/parseWordpressHTML'

export default async function About() {
  const page = await getPageBySlug('about');
  const { headings, paragraphs, images, links } = parseWordPressHTML(page?.content?.rendered ?? '')

  return (
    <>
      <main className={styles.about}>
        {images[0]}
        <div className={styles.container}>
          {headings[0]}
          {paragraphs[0]}
          {links[0]}
        </div>
      </main>
    </>
  );
}
