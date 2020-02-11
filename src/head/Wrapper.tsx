import React from 'react';
import PropTypes from 'prop-types';
import Meta from './meta';

const HeadWrapper = ({ children }) => (
  <>
    <Meta />
    { children }
  </>
);

HeadWrapper.propTypes = {
  children: PropTypes.node,
};

export default HeadWrapper;
