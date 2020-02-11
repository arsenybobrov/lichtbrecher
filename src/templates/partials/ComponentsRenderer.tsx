import React from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import SLICE_MAP from '../../../api/prismic/slices/map';

interface Props {
  slices: [
    {
      slice_type: string;
      items: [];
      primary: {};
    }
  ];
}

const ComponentsRenderer: React.FC<Props> = ({
  slices,
}) => (
  <>
    {
      slices.map((slice) => (
        <div key={uniqueId()}>
          {React.createElement(
            get(SLICE_MAP, slice.slice_type, SLICE_MAP.dummy),
            { primary: slice.primary, items: slice.items, sliceName: slice.slice_type },
            null
          )}
        </div>
      ))
    }
  </>
);

export default ComponentsRenderer;
