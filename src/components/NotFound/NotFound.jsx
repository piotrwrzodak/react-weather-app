import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound({ props }) {
  const handleClick = () => {
    props.changePath('/');
  };

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading">404 Not Found</h1>
        <Link className="not-found__heading" to="/" onClick={handleClick}>
          Go to menu
        </Link>
      </div>
    </div>
  );
}
