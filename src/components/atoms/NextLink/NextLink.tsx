import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import get from 'lodash/get';
import linkResolver from '../../../../api/prismic/helper/linkResolver';

const NextLink = ({
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
        rel={get(url, 'target', '_self') === '_blank' ? 'noopener noreferrer' : null}
      >
        {text}
      </a>
    </Link>
  );
};

NextLink.propTypes = {
  text: PropTypes.string,
  url: PropTypes.object,
  title: PropTypes.string,
};

export default NextLink;
