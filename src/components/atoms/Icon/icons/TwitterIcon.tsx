import React from 'react';

type Props = {
  className?: string;
};

const TwitterIcon: React.FC<Props> = ({ className }) => (
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
      d="M200 38c-7.4 3.3-15.3 5.5-23.6 6.5 8.5-5.1 15-13.1 18-22.7-7.9 4.7-16.7 8.1-26.1 10-7.5-8-18.1-13-29.9-13-26.5 0-46 24.7-40 50.4-34.1-1.7-64.3-18-84.6-42.9C3.2 44.7 8.4 68.8 26.6 81c-6.7-.2-13-2-18.6-5.1-.4 19 13.2 36.8 32.9 40.8-5.8 1.6-12.1 1.9-18.5.7 5.2 16.3 20.4 28.2 38.3 28.5-17.3 13.5-39 19.6-60.8 17 18.2 11.6 39.7 18.4 62.9 18.4C139 181.3 182 117 179.4 59.2c8.1-5.8 15.1-13 20.6-21.2z"
    />
  </svg>
);

export default TwitterIcon;
