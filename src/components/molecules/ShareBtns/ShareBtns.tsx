import React from 'react';
import { Flex } from '@nx-kit/flex';
import styled, { css } from 'styled-components';
import isClient from '../../../helpers/isClient';
import shareUrl, { ShareChannelType } from '../../../helpers/shareUrl';
import Icon from '../../atoms/Icon/Icon';

interface ShareChannel {
  channel: ShareChannelType;
  title: string;
}

interface ShareBtnsProps {
  channels: Array<ShareChannel>;
}

const Wrapper = styled(Flex)`
  width: 100%;
`;

// also used inside SocialChannels.tsx
export const ChannelStyling = css`
  cursor: pointer;
  margin-right: 20px;
  color: ${(props) => props.theme.global.color.primary};
  transition: color .5s ease-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${(props) => props.theme.global.color.secondary};
  }

  svg {
    max-width: 19px;
    max-height: 19px;
    width: 100%;
    height: 100%;
  }
`;

const Channel = styled.button`
  ${ChannelStyling};
`;

const ShareBtns: React.FC<ShareBtnsProps> = ({ channels }) => {
  const url = isClient() ? window?.location?.href : '';
  return (
    <Wrapper justifyContent={{ xs: 'flex-end', md: 'flex-start' }} id="shareBtns">
      <Flex>
        {channels.map((channel: ShareChannel) => {
          if (channel.channel) {
            return (
              <Channel
                key={channel.channel}
                title={channel.title}
                onClick={(): void => shareUrl(channel.channel, url)}
              >
                <Icon icon={channel.channel} />
              </Channel>
            );
          }
          return false;
        })}
      </Flex>
    </Wrapper>
  );
};

export default ShareBtns;
