import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Button from 'components/Button';

const RouteButton = ({ path, history, ...rest }) => {
  /* Clearing unnecessary props for the Button component */
  const buttonProps = rest;
  delete buttonProps.match;
  delete buttonProps.location;
  delete buttonProps.staticContext;

  return (
    <Button
      {...buttonProps}
      onClick={() => history.push(path)}
    />
  );
};

RouteButton.propTypes = {
  path: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any)
};

export default withRouter(RouteButton);
