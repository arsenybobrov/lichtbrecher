import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 5px solid red;
`;

const DummySlice = ({
  sliceName,
}) => (
  <Wrapper>
    the slice {sliceName} does not exist yet...
  </Wrapper>
);

DummySlice.propTypes = {
  sliceName: PropTypes.string,
};

export default DummySlice;
