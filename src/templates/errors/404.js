import React from 'react';
import PropTypes from 'prop-types';

const Error404Template = ({ globalConfig }) => (
  <>
    <h1>Error 404</h1>
    <p>no such page</p>
    <p>{globalConfig.data.display_name[0].text}</p>
  </>
);

Error404Template.propTypes = {
  globalConfig: PropTypes.objectOf(PropTypes.object()),
};

export default Error404Template;
