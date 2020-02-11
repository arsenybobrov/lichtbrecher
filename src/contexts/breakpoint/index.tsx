import React from 'react';

export const BreakpointContext = React.createContext('xs');

export const BreakpointProvider = BreakpointContext.Provider;
export const BreakpointConsumer = BreakpointContext.Consumer;
