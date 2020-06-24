import React from 'react';
import Router from 'next/router';
import get from 'lodash/get';
import linkResolver from '../../../../prismic/helper/linkResolver';
import { PrismicLink } from '../../../../prismic/types';

interface LinkProps {
  text: string,
  url: PrismicLink,
  title: string,
}

const Link: React.FC<LinkProps> = ({
  text, url, title = text,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    as: string,
    options?: any
  ) => {
    e.preventDefault();
    setTimeout(() => {
      Router.push(href, as, options);
    }, 0);
  };

  if (url) {
    if (url?.link_type !== 'Document') {
      return (
        <a
          href={linkResolver(url)}
          title={title}
          target={get(url, 'target', null)}
          rel={get(url, 'target', '_self') === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      );
    }

    return (
      <a
        href={linkResolver(url)}
        title={title}
        onClick={(e) => handleClick(e, '/', linkResolver(url))}
      >
        {text}
      </a>
    );
  }
  return <></>;
};

export default Link;
