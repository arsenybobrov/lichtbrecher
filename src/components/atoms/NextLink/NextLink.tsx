import React from 'react';
import Link from 'next/link';
import get from 'lodash/get';
import linkResolver from '../../../../api/prismic/helper/linkResolver';

interface Props {
  text: string,
  url: {
    type: string;
  },
  title: string,
}

const NextLink: React.FC<Props> = ({
  text, url, title = text,
}) => {
  let href = '';
  if (get(url, 'type', null)) {
    href = url.type === 'homepage' ? '/' : '/[page]';
  }

  return (
    <Link
      as={linkResolver(url)}
      href={href}
    >
      <a
        href={linkResolver(url)}
        title={title}
        target={get(url, 'target', null)}
        rel={get(url, 'target', '_self') === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {text}
      </a>
    </Link>
  );
};

export default NextLink;
