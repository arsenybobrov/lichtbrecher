import React from 'react';

type Props = {
  className?: string;
};

const DefaultChannel: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="25px"
    height="25px"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    overflow="visible"
  >
    <path
      fill="currentColor"
      d="M86.1 256.9c14.9 0 28.6-5.4 39.3-14.2l129 81c-1.2 4.8-1.8 9.8-1.8 14.9 0 33.9 27.5 61.3 61.3 61.3 33.9 0 61.3-27.5 61.3-61.3 0-33.9-27.5-61.3-61.3-61.3-14.9 0-28.6 5.4-39.3 14.2l-129-81c1.2-4.8 1.8-9.8 1.8-14.9 0-6.2-.9-12.1-2.6-17.8l97-67.6c10.3 7.8 23.1 12.4 37 12.4 33.9 0 61.3-27.5 61.3-61.3 0-33.9-27.5-61.3-61.3-61.3-33.9 0-61.3 27.5-61.3 61.3 0 6.2.9 12.1 2.6 17.8l-97 67.6c-10.3-7.8-23.1-12.4-37-12.4-33.9 0-61.3 27.5-61.3 61.3 0 33.9 27.5 61.3 61.3 61.3z"
    />
  </svg>
);

export default DefaultChannel;
