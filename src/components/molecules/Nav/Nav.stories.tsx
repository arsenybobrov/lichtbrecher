import React from 'react';
import Nav from './Nav';
import FooterMock from '../../organisms/Footer/Footer.mock';

export default {
  title: 'Molecules/Nav',
  component: Nav,
};

export const Default = () => <Nav nav={FooterMock.footerNav} />;
export const Accordion = () => <Nav nav={FooterMock.footerNav} isAccordion />;
export const AccordionInitialOpenedTab = () => <Nav nav={FooterMock.footerNav} isAccordion initialOpenedItem={0} />;
