'use client'
import { freelanceContent } from "@/data/freelanceContent";
import Gallery from "@/components/Gallery";

export default function Freelance() {
  const content = freelanceContent

  return (
    <Gallery title={content.title} bgColor={content.color} description={content.description} object={content.section}/>
  )
}
