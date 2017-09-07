import React from 'react';
import PropTypes from 'prop-types';
import './styles.styl';

const Button = ({ children, ...rest }) => (
  <button
    className='Button'
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
