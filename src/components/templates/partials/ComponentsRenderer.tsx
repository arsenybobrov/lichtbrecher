import React from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import SLICES_MAP from '../../../../prismic/slices';

interface ComponentsRendererProps {
  slices: [
    {
      slice_type: string;
      items: [];
      primary: {};
    }
  ];
}

interface UndefinedSliceProps {
  sliceName: string;
}

const UndefinedSlice: React.FC<UndefinedSliceProps> = ({ sliceName }) => (
  <div>&quot;{sliceName}&quot; is not defined yet</div>
);

const ComponentsRenderer: React.FC<ComponentsRendererProps> = ({
  slices,
}) => (
  <>
    {
      slices.map((slice) => (
        <div key={uniqueId()} data-slice-name={slice.slice_type}>
          {React.createElement(
            get(SLICES_MAP, slice.slice_type, UndefinedSlice),
            { primary: slice.primary, items: slice.items, sliceName: slice.slice_type },
            null
          )}
        </div>
      ))
    }
  </>
);

export default ComponentsRenderer;
