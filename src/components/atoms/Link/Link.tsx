import React, { useContext } from 'react';
import Router from 'next/router';
import get from 'lodash/get';
import linkResolver from '../../../../prismic/helper/linkResolver';
import { PrismicLink } from '../../../../prismic/types';
import { DocumentRelationsContext } from '../../../contexts/documentRelations/DocumentRelationsContext';

interface LinkProps {
  text?: string,
  url: PrismicLink,
  title?: string,
}

const Link: React.FC<LinkProps> = ({
  text, url, title = text || '', children,
}) => {
  const documentRelations = useContext(DocumentRelationsContext);

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
          target={get(url, 'target', null) || undefined}
          rel={get(url, 'target', '_self') === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {text || children}
        </a>
      );
    }

    return (
      <a
        href={linkResolver(url, documentRelations)}
        title={title}
        onClick={(e) => handleClick(e, '/', linkResolver(url, documentRelations))}
      >
        {text || children}
      </a>
    );
  }
  return <></>;
};

export default Link;
