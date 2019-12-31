import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { BreakpointProvider } from './index';
import getBreakpoint from '../../helpers/getBreakpoint';

const BreakpointProviderWrapper = ({
  children,
}) => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  const resizeListener = debounce(() => {
    setBreakpoint(getBreakpoint());
  }, 250);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  return (
    <BreakpointProvider value={breakpoint}>
      {children}
    </BreakpointProvider>
  );
};

BreakpointProviderWrapper.propTypes = {
  children: PropTypes.node,
};

export default BreakpointProviderWrapper;
