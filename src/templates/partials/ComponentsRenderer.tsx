import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import SLICE_MAP from '../../../api/prismic/slices/map';

const ComponentsRenderer = ({
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

ComponentsRenderer.propTypes = {
  slices: PropTypes.array,
};

export default ComponentsRenderer;
