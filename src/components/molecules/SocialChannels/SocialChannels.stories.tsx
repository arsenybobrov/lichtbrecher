import React from 'react';
import SocialChannels, { Channel } from './SocialChannels';

export default {
  title: 'Molecules/SocialChannels',
  component: SocialChannels,
};

const socialChannels: Array<Channel> = [
  {
    channel: 'https://www.facebook.com/GitHub',
    title: 'visit us',
  },
  {
    channel: 'https://twitter.com/github',
    title: 'visit us',
  },
  {
    channel: 'https://www.youtube.com/github',
    title: 'visit us',
  },
  {
    channel: 'https://www.linkedin.com/company/github',
    title: 'visit us',
  },
  {
    channel: 'https://github.com/github',
    title: 'visit us',
  },
];

export const Default = () => <SocialChannels channels={socialChannels} />;
