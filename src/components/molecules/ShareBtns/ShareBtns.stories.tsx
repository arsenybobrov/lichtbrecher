import React from 'react';
import ShareBtns from './ShareBtns';

export default {
  title: 'Molecules/ShareBtns',
  component: ShareBtns,
};

export const Default = () => (
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
);

export const LessChannels = () => (
  <ShareBtns
    channels={[
      { channel: 'TWITTER', title: 'click me' },
      { channel: 'LINKEDIN', title: 'click me' },
      { channel: 'MAIL', title: 'click me' },
    ]}
  />
);
