import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Organisms/Accordion',
  component: Accordion,
};

const AccordionMock = [
  { description: 'Tab1', column: <div>Hello world!</div> },
  { description: 'Tab3', column: <div>Hello world!</div> },
  { description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', column: <div>Hello world!</div> },
  { description: 'Tab5', column: <div>Hello world!</div> },
  { description: 'Tab6', column: <div>Hello world!</div> },
];

export const Default = () => <Accordion items={AccordionMock} activeItem={-1} onChange={(idx) => console.log('Tab: ', idx)} />;
export const TabInitialyOpened = () => <Accordion items={AccordionMock} activeItem={2} onChange={(idx) => console.log('Tab: ', idx)} />;
