import Art from '@/components/Art'
import { homeImages } from '@/data/homeImages'
import styles from '@/app/page.module.css'
import { altRegex } from '@/utils/altRegex'

export default function ArtGrid() {
  return (
    <section className={styles.artGrid}>
      {Object.values(homeImages).map((c) => (
        <div key={c[0].src} className={styles.artFlex}>
          {c.map((i) => (
            <Art key={i.src} src={i.src} alt={`${i.src.match(altRegex)[1].replace(/[-_]/g, ' ')} artwork in Matt Gilu's portfolio`} position={i.position}/>
          ))}
        </div>
      ))}
    </section>
  )
}
