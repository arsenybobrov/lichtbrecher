import React from 'react';
import { Elements } from 'prismic-reactjs';
import { Heading } from '@nx-kit/heading';
import linkResolver from './linkResolver';
import Link from '../../src/components/atoms/Link/Link';
import {ListItem, OrderedList, UnorderedList} from '../../src/components/atoms/List/List';

const propsWithUniqueKey = (props: any, key: any) => Object.assign(props || {}, { key });

const htmlSerializer = (type: any, element: any, content: any, children: any, key: any) => {
  let props = {};
  switch (type) {
    case Elements.heading1:
      props = {
        skin: 800,
        elementType: 'h1',
      };
      return React.createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading2:
      props = {
        skin: 700,
        elementType: 'h2',
      };
      return React.createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading3:
      props = {
        skin: 600,
        elementType: 'h3',
      };
      return React.createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading4:
      props = {
        skin: 500,
        elementType: 'h4',
      };
      return React.createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.hyperlink:
      if (element.data.link_type === 'Document') {
        props = {
          url: element.data,
          skin: 'copytext',
          text: content,
        };
        return React.createElement(Link, propsWithUniqueKey(props, key), children);
      }
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener noreferrer' } : {};
      props = { href: element.data.url || linkResolver(element.data), ...targetAttr, ...relAttr };
      return React.createElement('a', propsWithUniqueKey(props, key), children);
    case Elements.listItem: // Unordered List Item
      return React.createElement(ListItem, propsWithUniqueKey(props, key), children);

    case Elements.oListItem: // Ordered List Item
      return React.createElement(ListItem, propsWithUniqueKey(props, key), children);

    case Elements.list: // Unordered List
      return React.createElement(UnorderedList, propsWithUniqueKey(props, key), children);

    case Elements.oList: // Ordered List
      return React.createElement(OrderedList, propsWithUniqueKey(props, key), children);
    default:
      return null;
  }
};

export default htmlSerializer;
