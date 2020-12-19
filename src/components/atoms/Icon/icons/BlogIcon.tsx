import React from 'react';

type Props = {
  className?: string;
};

const BlogIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="25px"
    height="25px"
  >
    <path
      fill="currentColor"
      d="M20.6 144.2l35.2 35.1L161.2 74 126 39 20.6 144.2zM0 199.8l46.9-11.7L11.7 153 0 199.8zM196.4 21.4L178.8 3.9C173.9-1 166-1 161.2 3.9l-26.4 26.3L170 65.3 196.4 39c4.8-4.9 4.8-12.7 0-17.6z"
    />
  </svg>
);

export default BlogIcon;
