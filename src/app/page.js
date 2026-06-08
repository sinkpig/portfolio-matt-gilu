import { getPageBySlug } from '@/lib/wordpress'
import { parseWordPressHTML } from '@/lib/parseWordpressHTML'
import ArtGrid from '@/components/ArtGrid'
import ModalProvider from '@/components/modal/ModalProvider'
import styles from '@/app/page.module.css'

export default async function Home() {
  const page = await getPageBySlug('home');
  const { headings, paragraphs, images, links } = parseWordPressHTML(page?.content?.rendered ?? '')

  return (
    <>
      <main>
        <ArtGrid/>
        <section className={styles.about}>
          <div className={styles.content}>
            {headings[0]}
            {paragraphs[0]}
            {links[0]}
          </div>
          {images[0]}
        </section>
      </main>
      <ModalProvider/>
    </>
  );
}
