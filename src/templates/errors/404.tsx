import React, { useContext } from 'react';
import { GlobalConfigContext } from '../../contexts/globalConfig';

const Error404Template = () => {
  const content = useContext(GlobalConfigContext);

  return (
    <>
      <h1>404 TEMPLATE</h1>
      <br />
      <pre>
        {JSON.stringify(content, null, 2)}
      </pre>
    </>
  );
};

export default Error404Template;
