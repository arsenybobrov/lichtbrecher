import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import linkResolver from '../../../../api/prismic/linkResolver';

const NextLink = ({
  text, url, templatePath, title = text, target,
}) => (
  <Link as={linkResolver(url)} href={templatePath}>
    <a
      href={linkResolver(url)}
      title={title}
      target={target}
      rel={target === '_blank' ? 'noopener norefferer' : null}
    >
      {text}
    </a>
  </Link>
);

NextLink.propTypes = {
  text: PropTypes.string,
  url: PropTypes.object,
  templatePath: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
};

export default NextLink;
