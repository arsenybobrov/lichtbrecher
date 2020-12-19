import React from 'react';
import { Flex } from '@nx-kit/flex';
import Container from './Container';
import Row from './Row';

export default {
  title: 'Layout/Grid',
};

export const Standard = () => (
  <Container>
    <Row>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 2 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 2 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 2 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 / 2 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex
        col={{ md: 3 / 12 }}
        colOffset={{ md: 3 / 12 }}
        styles={{ backgroundColor: '#aaa', padding: '20' }}
      >
        Col
      </Flex>
      <Flex col={{ md: 3 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 3 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
    </Row>
  </Container>
);

export const WithGap = () => (
  <Container>
    <Row gap={{ xs: '20px', md: '40px' }}>
      <Flex col={{ md: 10 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 5 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 5 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
      <Flex col={{ md: 1 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
        Col
      </Flex>
    </Row>
  </Container>
);

const createDiv = () => <div>I am outside</div>;

export const OutsideGrid = () => (
  <Container outsideGridLeft={createDiv()} outsideGridRight={createDiv()}>
    <Flex col={{ xs: 6 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
      Col
    </Flex>
    <Flex col={{ xs: 6 / 12 }} styles={{ backgroundColor: '#aaa', padding: '20' }}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
    </Flex>
  </Container>
);
