import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/Title'

export function parseWordPressHTML(html) {
  const slots = { headings: [], paragraphs: [], images: [], links: [] }

  const options = {
    replace(node) {
      if (node.name === 'h1') {
        const bgColor = stripWpElements(node)
        const el = <Title bgColor={bgColor}>{domToReact(node.children, options)}</Title>
        slots.headings.push(el)
        return el
      }

      if (node.name === 'figure') {
        const imgNode = node.children?.find(c => c.name === 'img')
        if (!imgNode) return <></>
        const a = imgNode.attribs ?? {}
        const src = a['data-orig-file'] ?? a.src
        const [w, h] = (a['data-orig-size'] ?? '').split(',')
        const el = <Image src={src} width={Number(w) || Number(a.width) || 568} height={Number(h) || Number(a.height) || 600} alt={a.alt || ''} loading="eager" />
        slots.images.push(el)
        return <></>
      }

      if (node.name === 'a') {
        const href = node.attribs?.href ?? '#'
        const bgColor = stripWpElements(node)
        let el = ''
        if (bgColor) {
          el = (
            <Title tag="p" bgColor={bgColor} direction="center">
              <Link href={href} download>{domToReact(node.children)}</Link>
            </Title>
          )
        } else {
          el = <Link href={href}>{domToReact(node.children)}</Link>
        }
        slots.links.push(el)
        return el
      }

      if (node.name === 'p') {
        const el = <p>{domToReact(node.children, options)}</p>
        slots.paragraphs.push(el)
        return el
      }
    }
  }

  const raw = parse(html, options)
  return { ...slots, raw }
}

function stripWpElements(n) {
  return (n.attribs?.class ?? '')
    .split(' ')
    .find(c => c && !c.startsWith('wp-'))
}
