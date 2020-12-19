import React, { useContext } from 'react';
import styled from 'styled-components';
import getSpacing from './helpers/getSpacing';
import { BreakpointContext } from '../../../contexts/breakpoint/BreakpointContext';
import getDevice from '../../../helpers/getDevice';

interface CmsElmtWrapperProps {
  id?: string;
  nextSlice?: string;
  sliceName: string;
}

const Div = styled.div<{ spacing: number }>`
  margin-bottom: ${(props) => props.spacing}px;
`;

const CmsElmtWrapper: React.FC<CmsElmtWrapperProps> = ({ nextSlice, sliceName, id, children }) => {
  const breakpoint = useContext(BreakpointContext);
  const spacingBreakpoint = getDevice(breakpoint, 'smartphone') ? 'xs' : 'xl';

  return (
    <Div
      as="section"
      id={id}
      spacing={getSpacing(spacingBreakpoint, sliceName, nextSlice)}
      data-slice-name={sliceName}
    >
      {children}
    </Div>
  );
};

export default CmsElmtWrapper;
