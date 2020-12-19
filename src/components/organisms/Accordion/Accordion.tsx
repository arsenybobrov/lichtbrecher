import React, { ReactNode } from 'react';
import AccordionItem from './partials/AccordionItem';

interface Item {
  description: string;
  column: ReactNode;
}

export interface AccordionProps {
  items: Array<Item>;
  activeItem: number;
  onChange: (idx: number) => void;
  isPartOfCmsTabs?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, activeItem, onChange }) => {
  return (
    <>
      {items.map((item: Item, idx: number) => (
        <AccordionItem
          key={item.description}
          description={item.description}
          initialOpened={idx === activeItem}
          clicked={(): void => onChange(idx)}
        >
          {item.column}
        </AccordionItem>
      ))}
    </>
  );
};

export default Accordion;
