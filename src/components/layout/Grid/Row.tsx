import React from 'react';
import { Flex } from '@nx-kit/flex';
import {As, LiteralOrBreakpoints} from '@nx-kit/styling';

interface Props {
  children: any;
  gap?: LiteralOrBreakpoints<string | number>;
  elementType?: As;
  className?: string;
}

const Row = ({ elementType, children, gap, className }: Props) => {
  return (
    <Flex
      gap={gap}
      flexWrap="wrap"
      flexDirection={{ xs: 'column', md: 'row' }}
      elementType={elementType}
      className={className}
      styles={{ width: { md: '100%' } }}
    >
      {children}
    </Flex>
  );
};

export default Row;
