import React from 'react';
import { useHistory } from 'react-router-dom';

export function NotFound() {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/`);
  };

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading">404 Not Found</h1>
        <h1
          className="not-found__heading not-found__heading--link"
          onClick={handleClick}
        >
          Go to menu
        </h1>
      </div>
    </div>
  );
}
