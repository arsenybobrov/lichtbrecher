import React, { useState, useEffect, useRef } from 'react';
import { media, useBreakpointsSorted } from '@nx-kit/styling';
import { ThemeProps, useTheme } from 'styled-components';
import { BreakpointProvider } from './BreakpointContext';

const BreakpointProviderWrapper: React.FC = ({ children }) => {
  const mqls = useRef<any>([]);
  const theme = useTheme();
  const breakpointsSorted = useBreakpointsSorted();
  const [breakpoint, setBreakpoint] = useState('xs');

  useEffect(() => {
    const register = (size: string) => (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setBreakpoint(size);
      }
    };

    breakpointsSorted.forEach((bp) => {
      const currentMedia = media(bp, breakpointsSorted[breakpointsSorted.indexOf(bp)]);
      const mq = currentMedia({ theme } as ThemeProps<any>).split('@media')[1];
      const mql = window.matchMedia(mq);
      const listener = register(bp as string);
      mql.addListener(listener);
      listener(mql);
      mqls.current = [...mqls.current, { mql, listener }];
    });
    return () => {
      mqls.current.forEach((m: any) => m.mql.removeListener(m.listener));
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
