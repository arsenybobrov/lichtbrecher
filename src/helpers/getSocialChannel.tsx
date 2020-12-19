import React, { ReactNode } from 'react';
import Icon from '../components/atoms/Icon/Icon';
import { IconType } from '../components/atoms/Icon/iconMap';

export interface SocialMediaChannel {
  text?: string;
  url: string;
  target?: string;
}

const socialChannels = [
  'twitter',
  'facebook',
  'xing',
  'linkedin',
  'youtube',
  'instagram',
  'blog',
];

const getSocialChannel = (channel: SocialMediaChannel): ReactNode => {
  const { url } = channel;
  const text = channel.text ?? channel.url;

  let channelName = 'DEFAULTCHANNEL';

  socialChannels.map((item) => {
    if (url.indexOf(item) !== -1) {
      channelName = item;
    }
    return false;
  });

  return (
    <a
      key={channelName}
      href={url}
      title={text || url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Icon icon={channelName.toLocaleUpperCase() as IconType} />
    </a>
  );
};

export default getSocialChannel;
