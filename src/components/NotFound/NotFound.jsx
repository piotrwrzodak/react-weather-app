import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading" to="/">
          404 Not Found
        </h1>
        <Link className="not-found__heading" to="/">
          Go to menu
        </Link>
      </div>
    </div>
  );
}
