import React from 'react';

type Props = {
  className?: string;
};

const FacebookIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="23px"
  >
    <path
      fill="currentColor"
      d="m75 66.7h-25v33.3h25v100h41.7v-100h30.3l3-33.3h-33.3v-13.9c0-8 1.6-11.1 9.3-11.1h24v-41.7h-31.7c-30 0-43.3 13.2-43.3 38.5z"
    />
  </svg>
);

export default FacebookIcon;
