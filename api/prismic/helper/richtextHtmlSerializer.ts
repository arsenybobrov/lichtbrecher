import React from 'react';
import { Elements } from 'prismic-reactjs';
import Router from 'next/router';
import linkResolver from './linkResolver';

// Todo: add types

// -- Function to add unique key to props
const propsWithUniqueKey = (props: any, key: string) => Object.assign(props || {}, { key });

// Handler that will do routing imperatively on internal links
const onClickHandler = (href: string, as: string) => (e: Event) => {
  e.preventDefault();
  Router.push(href, as);
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
// @ts-ignore
const htmlSerializer = (type: string, element: any, content: any, children: any, key: string) => {
  let props = {};
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: 'paragraph-class' };
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    // Internal links next-link behavior
    case Elements.hyperlink:
      if (element.data.link_type === 'Document') {
        const href = element.data.type === 'homepage' ? '/' : '/[page]';
        // Only for internal links add the new onClick that will imperatively route to page
        props = {
          onClick: onClickHandler(href, linkResolver(element.data)),
          href: linkResolver(element.data),
        };
        return React.createElement('a', propsWithUniqueKey(props, key), children);
      }
      // Default link handling
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener noreferrer' } : {};
      props = { href: element.data.url || linkResolver(element.data), ...targetAttr, ...relAttr };
      return React.createElement('a', propsWithUniqueKey(props, key), children);


    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default htmlSerializer;
