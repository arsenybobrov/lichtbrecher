import React from 'react';
import { Elements } from 'prismic-reactjs';
import linkResolver from './linkResolver';
import Link from '../../src/components/atoms/Link/Link';

const propsWithUniqueKey = (props: any, key: any) => Object.assign(props || {}, { key });

const htmlSerializer = (type: any, element: any, content: any, children: any, key: any) => {
  let props = {};
  switch (type) {
    case Elements.paragraph:
      props = { className: 'paragraph-class' };
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    case Elements.hyperlink:
      if (element.data.link_type === 'Document') {
        props = {
          url: element.data,
          text: content,
        };
        return React.createElement(Link, propsWithUniqueKey(props, key), children);
      }
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener noreferrer' } : {};
      props = { href: element.data.url || linkResolver(element.data), ...targetAttr, ...relAttr };
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    default:
      return null;
  }
};

export default htmlSerializer;
