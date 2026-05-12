'use client'
import { storyboardContent } from "@/data/storyboardContent"
import Title from "@/components/Title"
import ModalProvider from "@/components/modal/ModalProvider"
import Art from "@/components/Art"
import styles from '@/app/storyboard/page.module.css'

export default function Storyboard() {
  const content = storyboardContent
  return (
    <>
      <main>
        <div className={styles.container}>
          <Title bgColor={content.color} text={content.title}/>
        </div>

        <div className={styles.section}>
          {content.section.map((section) => (
            <div key={section.title}>
              <Title text={section.title} tag="h3" bgColor="lightestBlue" />
              <div className={styles.content}>
                <iframe src={section.link} allowFullScreen/>
                <div>
                  <h6>{section.subtitle}</h6>
                  <p>{section.description}</p>
                </div>
              </div>
              <div className={styles.overflow}>
                <div className={styles.thumbs}>
                  {section.images.map((i) => (
                    <Art key={i.src} src={i.src} alt={i.alt} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <ModalProvider/>
    </>
  )
}
