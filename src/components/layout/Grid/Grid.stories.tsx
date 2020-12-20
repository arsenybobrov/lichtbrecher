import React from 'react';
import styled from 'styled-components';
import { Flex } from '@nx-kit/flex';
import Container from './Container';
import Row from './Row';

export default {
  title: 'Layout/Grid',
};

const StyledFlex = styled(Flex)`
  background: #aaa;
  padding: 20px;
`;

export const Standard = () => (
  <Container>
    <Row>
      <StyledFlex col={{ md: 1 / 3 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 3 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 3 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 3 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </StyledFlex>
      <StyledFlex col={{ md: 1 / 3 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 3 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </StyledFlex>
      <StyledFlex col={{ md: 1 / 2 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 2 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 / 2 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </StyledFlex>
      <StyledFlex col={{ md: 1 / 2 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 3 / 12 }} colOffset={{ md: 3 / 12 }}>
        Col
      </StyledFlex>
      <StyledFlex col={{ md: 3 / 12 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 3 / 12 }}>Col</StyledFlex>
    </Row>
  </Container>
);

export const WithGap = () => (
  <Container>
    <Row gap={{ xs: '20px', md: '40px' }}>
      <StyledFlex col={{ md: 10 / 12 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </StyledFlex>
      <StyledFlex col={{ md: 5 / 12 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </StyledFlex>
      <StyledFlex col={{ md: 5 / 12 }}>Col</StyledFlex>
      <StyledFlex col={{ md: 1 }}>Col</StyledFlex>
    </Row>
  </Container>
);

const createDiv = () => <div>I am outside</div>;

export const OutsideGrid = () => (
  <Container outsideGridLeft={createDiv()} outsideGridRight={createDiv()}>
    <StyledFlex col={{ xs: 6 / 12 }}>Col</StyledFlex>
    <StyledFlex col={{ xs: 6 / 12 }}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
      massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
      pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
      lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
      varius laoreet. Quisque rutrum. Aenean imperdiet.
    </StyledFlex>
  </Container>
);

export const AsCmsElementWrapper = () => (
  <>
    <Container elementType="section" sliceName="text" nextSlice="text">
      <StyledFlex>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      </StyledFlex>
    </Container>
    <Container elementType="section" sliceName="text">
      <StyledFlex>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      </StyledFlex>
    </Container>
  </>
);
