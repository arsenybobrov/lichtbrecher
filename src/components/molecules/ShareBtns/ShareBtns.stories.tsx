import React from 'react';
import ShareBtns from './ShareBtns';
import { StyledMain } from '../../../../pages/_app';
import Container from '../../layout/Grid/Container';

export default {
  title: 'Molecules/ShareBtns',
  component: ShareBtns,
};

export const Default = () => (
  <>
    <StyledMain>
      <div />
      <Container>
        <ShareBtns
          channels={[
            { channel: 'FACEBOOK', title: 'click me' },
            { channel: 'XING', title: 'click me' },
            { channel: 'TWITTER', title: 'click me' },
            { channel: 'LINKEDIN', title: 'click me' },
            { channel: 'MAIL', title: 'click me' },
            { channel: 'WHATSAPP', title: 'click me' },
          ]}
        />
      </Container>
    </StyledMain>
  </>
);
