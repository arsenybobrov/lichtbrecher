import React from 'react';
import { Elements } from 'prismic-reactjs';
import Router from 'next/router';
import linkResolver from './linkResolver';

// -- Function to add unique key to props
const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key });

// Handler that will do routing imperatively on internal links
const onClickHandler = (href, as) => (e) => {
  e.preventDefault();
  Router.push(href, as);
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function (type, element, content, children, key) {
  let props = {};
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: 'paragraph-class' };
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    // Add a class to hyperlinks
    case Elements.hyperlink:
      if (element.data.link_type === 'Document') {
        // Only for internal links add the new onClick that will imperatively route to page
        props = {
          onClick: onClickHandler('/[page]', linkResolver(element.data)),
          href: linkResolver(element.data),
        };
        return React.createElement('a', propsWithUniqueKey(props, key), children);
      }
      // Default link handling
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = { href: element.data.url || linkResolver(element.data), ...targetAttr, ...relAttr };
      return React.createElement('a', propsWithUniqueKey(props, key), children);


    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default htmlSerializer;
