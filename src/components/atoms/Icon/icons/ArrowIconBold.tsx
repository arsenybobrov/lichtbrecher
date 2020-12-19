import React from 'react';

type Props = {
  className?: string;
};

const ArrowIconBold: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    overflow="visible"
    width="12px"
    height="12px"
  >
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M321.6 199.9L128.4 0l-50 51.7 107.3 111.1 30.8 36.3-29.6 36.9L78.4 348.3l50 51.7 193.2-199.9-.1-.1z"
    />
  </svg>
);

export default ArrowIconBold;
