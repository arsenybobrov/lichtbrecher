import React from 'react';
import styled from 'styled-components';
import getSocialChannel from "../../../helpers/getSocialChannel";

export interface Channel {
  channel: string;
  title?: string;
}

interface SocialChannelsProps {
  channels: Array<Channel>;
  className?: string;
}

const Wrapper = styled.div``;

const SocialChannels: React.FC<SocialChannelsProps> = ({ channels , className}) => {
  return (
    <Wrapper className={className}>
      {channels?.map((channel) => {
        return getSocialChannel({ url: channel.channel, text: channel.title });
      })}
    </Wrapper>
  );
};

export default SocialChannels;
