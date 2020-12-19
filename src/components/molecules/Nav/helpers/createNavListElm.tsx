import React from 'react';
import { NavNested } from '../../../../helpers/flatNavToNestedNavConverter';
import Link from '../../../atoms/Link/Link';

const createNavListElm = (tree: NavNested, showActive?: boolean) => {
  const listElm = tree.map((item) => {
    const { nav_link, link_text, link_title } = item.data.primary;
    return (
      <li key={item.id}>
        <Link
          url={nav_link}
          text={link_text}
          title={link_title}
          showActive={showActive}
        />
        {item.children?.length ? <ul>{createNavListElm(item.children)}</ul> : null}
      </li>
    );
  });
  return listElm;
};

export default createNavListElm;
