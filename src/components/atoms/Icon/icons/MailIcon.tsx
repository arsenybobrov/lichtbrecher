import React from 'react';

type Props = {
  className?: string;
};

const MailIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="25px"
    height="23px"
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
  >
    <path
      fill="currentColor"
      d="M100 105.9L.1 25h199.8L100 105.9zm0 21.5L0 46.4V175h200V46.4l-100 81z"
    />
  </svg>
);

export default MailIcon;
