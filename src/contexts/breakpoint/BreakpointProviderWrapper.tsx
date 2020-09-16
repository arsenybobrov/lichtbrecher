import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { BreakpointProvider } from './BreakpointContext';
import getBreakpoint from '../../helpers/getBreakpoint';

const BreakpointProviderWrapper: React.FC = ({
  children,
}) => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  const resizeListener = debounce(() => {
    setBreakpoint(getBreakpoint());
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  return (
    <BreakpointProvider value={breakpoint}>
      {console.log('current breakpoint is: ', breakpoint)}
      {children}
    </BreakpointProvider>
  );
};

export default BreakpointProviderWrapper;
