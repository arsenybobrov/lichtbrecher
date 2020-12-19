import React from 'react';

type Props = {
  className?: string;
};

const XingIcon: React.FC<Props> = ({ className }) => (
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
      d="M124.6 200l-44.4-80.6L147.5 0h41.1l-67.2 119.4 43.9 80.6h-40.7zM63.8 41.7H22.7l23.1 39.5-34.3 60.5h41l34.3-60.6c-.1 0-23-39.4-23-39.4z"
    />
  </svg>
);

export default XingIcon;
