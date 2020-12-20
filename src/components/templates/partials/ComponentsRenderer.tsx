import React from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import SLICES_MAP from '../../../../prismic/slices';
import CmsElmtWrapper from '../../organisms/CmsElmtWrapper/CmsElmtWrapper';

interface ComponentsRendererProps {
  slices: [
    {
      slice_type: string;
      items: any;
      primary: any;
    }
  ];
}

interface UndefinedSliceProps {
  sliceName: string;
}

const UndefinedSlice: React.FC<UndefinedSliceProps> = ({ sliceName, ...rest }) => (
  <>
    <div>&quot;{sliceName}&quot; is not defined yet.</div>
    <div>Data: {JSON.stringify(rest, null, 2)}</div>
  </>
);

const ComponentsRenderer: React.FC<ComponentsRendererProps> = ({ slices }) => (
  <>
    {
      slices.map((slice, idx) => {
        return (
          <CmsElmtWrapper
            key={uniqueId()}
            id={slice.primary.anchor_id ?? undefined}
            sliceName={slice.slice_type}
            nextSlice={slices[idx + 1]?.slice_type ?? undefined}
          >
            {React.createElement(
              get(SLICES_MAP, slice.slice_type, UndefinedSlice),
              {
                primary: slice.primary,
                items: slice.items,
                sliceIndex: idx,
                sliceName: slice.slice_type,
              },
              null
            )}
          </CmsElmtWrapper>
        )
      })
    }
  </>
);

export default ComponentsRenderer;
