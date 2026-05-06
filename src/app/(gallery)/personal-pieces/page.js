'use client'
import { personalPiecesContent } from "@/data/personalPiecesContent";
import Gallery from "@/components/Gallery";

export default function Sketchbook() {
  const content = personalPiecesContent

  return (
    <Gallery title={content.title} bgColor={content.color} description={content.description} object={content.section}/>
  )
}
