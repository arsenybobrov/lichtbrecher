import React from 'react';

type Props = {
  className?: string;
};

const LinkedInIcon: React.FC<Props> = ({ className }) => (
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
      d="M41.5 25c0 11.5-9.2 20.8-20.7 20.8S.2 36.5.2 25 9.4 4.2 20.9 4.2 41.5 13.5 41.5 25zm.2 37.5H0v133.3h41.7V62.5zm66.5 0H66.8v133.3h41.4v-70c0-38.9 50.2-42.1 50.2 0v70H200v-84.4c0-65.7-74.3-63.3-91.8-31V62.5z"
    />
  </svg>
);

export default LinkedInIcon;
