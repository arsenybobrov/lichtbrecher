import React from 'react';
import { Data } from '../../../prismic/types';

export const SharedContentContext = React.createContext({} as Data | undefined);
export const SharedContentProvider = SharedContentContext.Provider;
export const SharedContentConsumer = SharedContentContext.Consumer;
