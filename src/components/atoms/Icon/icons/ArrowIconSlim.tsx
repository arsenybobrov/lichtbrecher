import React from 'react';

type Props = {
  className?: string;
};

const ArrowIconSlim: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    height="32px"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M245.9 39.7c-5.9-5.9-15.3-5.9-21.2 0-5.9 5.9-5.9 15.3 0 21.2L348.9 185H15c-8.3 0-15 6.7-15 15s6.7 15 15 15h333.9L224.7 339.1c-5.9 5.9-5.9 15.3 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l149.7-149.7c5.9-5.9 5.9-15.3 0-21.2L245.9 39.7z"
    />
  </svg>
);

export default ArrowIconSlim;
