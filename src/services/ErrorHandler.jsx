import React from 'react';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';
import { NotFound } from '../components/NotFound';

const ErrorHandler = ({ children }) => {
  const location = useLocation();

  switch (get(location.state, 'errorStatusCode')) {
    case '404':
      return <NotFound />;

    default:
      return children;
  }
};

export default ErrorHandler;
