import React, { useContext } from 'react';
import { GlobalConfigContext } from '../../contexts/globalConfig';

const Error404Template = () => {
  const content = useContext(GlobalConfigContext);

  return (
    <>
      <h1>Error 404</h1>
      <p>no such page</p>
      <p>{content.data.display_name[0].text}</p>
    </>
  );
};

export default Error404Template;
