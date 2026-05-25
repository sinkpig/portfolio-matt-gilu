import ModalProvider from '@/components/modal/ModalProvider'
import Title from "@/components/Title";
import Art from '@/components/Art'
import styles from '@/styles/Gallery.module.css'
import { altRegex } from '@/utils/altRegex';

export default function Gallery({ title, bgColor, description, object }) {
  return (
    <>
      <main>
        <div className={styles.container}>
          <Title text={title} bgColor={bgColor} />
          {description && <p>{description}</p>}
        </div>

        <div className={styles.section}>
          {object.map((section) => (
            <div key={section.title}>
              <Title text={section.title} tag="h3" bgColor="lightestBlue"/>
              <div className={styles.sectionContainer}>
                {section.art.map((i) => (
                  <Art key={i.src} src={i.src} alt={`${i.src.match(altRegex)[1].replace(/[-_]/g, ' ')} artwork in ${title}`} position={i.position}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <ModalProvider/>
    </>
  )
}
