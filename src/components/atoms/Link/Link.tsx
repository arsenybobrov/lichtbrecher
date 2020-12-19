import React, { useContext } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { Link as RsLink } from 'react-scroll';
import { Link as KitLink } from '@nx-kit/link';
import get from 'lodash/get';
import linkResolver from '../../../../prismic/helpers/linkResolver';
import { PrismicExternalLink, PrismicLink } from '../../../../prismic/types';
import { DocumentRelationsContext } from '../../../contexts/documentRelations/DocumentRelationsContext';
import isClient from '../../../helpers/isClient';
import checkLinkActiveState from '../../../helpers/checkLinkActiveState';

interface LinkProps {
  text?: string | null;
  url?: PrismicLink | PrismicExternalLink;
  title?: string | null;
  anchor_id?: string | null;
  skin?: string;
  target?: string;
  className?: string;
  showActive?: boolean;
  isClicked?: () => void;
}

const StyledAnchor = styled.div<{ skin?: string }>`
  a {
    ${(props) => props.theme.component.link.global};
    ${(props) => props.skin && props.theme.component.link.skin[props.skin]};
  }
`;

const Link: React.FC<LinkProps> = ({
  text,
  url,
  title = text || '',
  anchor_id,
  children,
  skin,
  target,
  className,
  showActive,
  isClicked,
}) => {
  const path = isClient() ? window?.location?.href : '';
  const isActive = showActive ? checkLinkActiveState(path, url) : false;
  const documentRelations = useContext(DocumentRelationsContext);
  const anchorLinkOffset = -50;
  const animationDuration = 1000;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    as: string,
    options?: any
  ) => {
    e.preventDefault();
    if (isClicked) {
      isClicked();
    }
    setTimeout(() => {
      Router.push(href, as, options);
    }, 0);
  };

  const handleAnchorClick = (hash: string) => {
    setTimeout(() => {
      window.location.hash = `#${hash}`;
    }, animationDuration);
  };

  if (url && url?.link_type !== 'Any') {
    if (url?.link_type !== 'Document') {
      return (
        <KitLink skin={skin} className={className}>
          <a
            href={linkResolver(url)}
            title={title || ''}
            target={get(url, 'target', null) || target || undefined}
            rel={get(url, 'target', '_self') === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {text || children}
          </a>
        </KitLink>
      );
    }

    return (
      <KitLink skin={skin} className={className}>
        <a
          href={linkResolver(url, documentRelations)}
          title={title || ''}
          onClick={(e) => handleClick(e, '/', linkResolver(url, documentRelations))}
          className={isActive ? 'active' : undefined}
        >
          {text || children}
        </a>
      </KitLink>
    );
  }

  if (anchor_id && anchor_id !== '') {
    return (
      <StyledAnchor skin={skin} className={className}>
        <RsLink
          title={title || ''}
          to={anchor_id}
          spy
          smooth
          duration={animationDuration}
          offset={anchorLinkOffset}
          onClick={() => handleAnchorClick(anchor_id)}
        >
          {text || children}
        </RsLink>
      </StyledAnchor>
    );
  }

  return <>{text}</>;
};

export default Link;
