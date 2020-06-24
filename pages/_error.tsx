import React from 'react';
import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  switch (statusCode) {
    case 401:
      return <div>Wrong token (401)</div>;
    case 404:
      return <div>Api url is wrong or no data/page404Data is provided (404).</div>;
    case 500:
      return <div>App ist down (500)</div>;
    default:
      return <div>Something went wrong. Provided code is: &quot;{statusCode}&quot;</div>;
  }
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const errorStatuscode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errorStatuscode;
  return { statusCode };
};

export default Error;
