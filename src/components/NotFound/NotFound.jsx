import React from 'react';

export function NotFound({ props }) {
  const handleClick = () => {
    props.changePath('/react-weather-app');
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
