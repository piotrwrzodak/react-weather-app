import React from 'react';
import { get } from 'lodash';
import { NotFound } from '../components/NotFound';

const ErrorHandler = ({ children, props }) => {
  switch (get(props.location.state, 'errorStatusCode')) {
    case '404': {
      console.log('404 errorhandler');
      return <NotFound props={props} />;
    }

    default:
      return children;
  }
};

export default ErrorHandler;
