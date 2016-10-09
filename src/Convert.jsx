import React from 'react';
import { Redirect, propTypes } from 'react-router';
import { isValid, getEncodedUri, decodeUri } from './utils';

const Convert = props => {
  const value = decodeUri(props.params.value);
  if (!value || !isValid(value)) return (<Redirect to="/" />);
  return (<Redirect to={`/embed/${getEncodedUri(value)}`} />);
};

// TODO: remove when this bug is squashed
delete propTypes.__esModule;
Convert.propTypes = {
  ...propTypes
};

export default Convert;
