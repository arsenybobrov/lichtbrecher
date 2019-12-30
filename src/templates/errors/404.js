import React from 'react';

const Error404Template = ({ globalConfig }) => (
  <>
    <h1>Error 404</h1>
    <p>no such page</p>
    <p>{globalConfig.data.display_name[0].text}</p>
  </>
);

export default Error404Template;
