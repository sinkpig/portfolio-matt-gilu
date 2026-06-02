import parse, { domToReact } from 'html-react-parser';
import Link from 'next/link';
import Title from '@/components/Title';

export default function WordPressContent({ html }) {
  const options = {
    replace(node) {
      if (node.name === 'h1') {
        const classes = (node.attribs?.class ?? '')
          .split(' ')
          .find(c => c && !c.startsWith('wp-block-'));

        return (
          <Title text={domToReact(node.children, options)} bgColor={classes} />
        );
      }

      if (node.name === 'a') {
        const href = node.attribs?.href ?? '#';
        return (
          <Title tag="p" bgColor="lightestBlue" direction="center">
            <Link href={href} download>
              {domToReact(node.children)}
            </Link>
          </Title>
        );
      }

      if (node.name === 'p') {
        return <p>{domToReact(node.children, options)}</p>;
      }
    }
  }
  return <>{parse(html, options)}</>;
}
