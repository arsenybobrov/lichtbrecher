import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@nx-kit/styling';
import Icon from '../../../atoms/Icon/Icon';

export interface AccordionItemProps {
  description: string;
  initialOpened?: boolean;
  clicked?: () => void;
}

const height = 1;
const heightMdUp = 1;

const Wrapper = styled.div`
  border-bottom: ${height}px solid ${(props): string => props.theme.global.color.secondary};

  &:last-of-type {
    border-bottom: none;
  }

  @media (${media('md')}) {
    border-bottom: ${heightMdUp}px solid ${(props): string => props.theme.global.color.secondary};
  }
`;

const Description = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px 20px 10px;
  font-size: 20px;
  line-height: 1.5;
  transition: color .25s ease-out;

  @media (${media('md')}) {
    padding: 10px 35px;
  }

  span {
    padding-right: 25px;
  }

  span:last-of-type {
    padding-right: 0;
  }
`;

const padding = 5;

const Content = styled.div<{ isOpen: boolean }>`
  margin-top: ${(props): string => (props.isOpen ? '0' : `-${padding}px`)};
  opacity: ${(props): string => (props.isOpen ? '1' : '0')};
  height: ${(props): string => (props.isOpen ? 'auto' : '0')};
  overflow: ${(props): string => (props.isOpen ? 'auto' : 'hidden')};
  padding: ${(props): string => (props.isOpen ? '20px' : '0')} 10px
    ${(props): string => (props.isOpen ? '30px' : `${padding}px`)};
  transition: margin-top .25s ease-out, opacity .25s ease-out, padding-bottom .25s ease-out;

  @media (${media('md')}) {
    padding: ${(props): string => (props.isOpen ? '20px' : '0')} 35px
      ${(props): string => (props.isOpen ? '30px' : `${padding}px`)};
  }
`;

const StyledIcon = styled(Icon)<{ active: boolean }>`
  height: 11px;
  width: 12px;
  margin-top: 2px;
  transition: transform .25s ease-out;
  transform: rotate(${(props) => (props.active ? '180deg' : '0')});
`;

const AccordionItem: React.FC<AccordionItemProps> = ({
  description,
  initialOpened = false,
  children,
  clicked,
}) => {
  const [opened, setOpened] = useState(initialOpened);

  const handleDescriptionClick = (): void => {
    setOpened(!opened);
    if (clicked) {
      clicked();
    }
  };

  return (
    <Wrapper>
      <Description role="button" onClick={handleDescriptionClick}>
        <span>{description}</span>
        <StyledIcon icon="ARROW_SLIM" active={opened} />
      </Description>
      <Content isOpen={opened}>{children}</Content>
    </Wrapper>
  );
};

export default AccordionItem;
