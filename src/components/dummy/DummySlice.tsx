import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid red;
`;

interface Props {
  sliceName: string;
}

const DummySlice: React.FC<Props> = ({
  sliceName,
}) => (
  <Wrapper>
    the slice {sliceName} does not exist yet...
  </Wrapper>
);

export default DummySlice;
