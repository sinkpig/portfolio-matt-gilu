'use client'
import { sketchbookContent } from "@/data/sketchbookContent";
import Gallery from "@/components/Gallery";

export default function Sketchbook() {
  const content = sketchbookContent

  return (
    <Gallery title={content.title} bgColor={content.color} description={content.description} object={content.section}/>
  )
}
