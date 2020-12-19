import React from 'react';

type Props = {
  className?: string;
};

const YoutubeIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="25px"
    height="23px"
  >
    <path
      fill="currentColor"
      d="M163.5 26.5c-30-2-96.9-2-126.9 0C4.1 28.7.2 48.4 0 100c.2 51.5 4 71.2 36.5 73.5 30 2 96.9 2.1 126.9 0 32.5-2.2 36.3-21.8 36.5-73.5-.1-51.5-3.9-71.2-36.4-73.5zM75 133.3V66.7l66.7 33.3L75 133.3z"
    />
  </svg>
);

export default YoutubeIcon;
