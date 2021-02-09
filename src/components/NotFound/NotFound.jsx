import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export function NotFound({ query, setQuery, props }) {
  const history = useHistory();
  const { fetchApi, fetchStatus } = props;
  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/current-weather/${query}`);
      console.log('notfound');
      setQuery('');
    }
  };

  useEffect(() => {
    if (!fetchStatus) {
      history.goBack();
      console.log('go back');
    }
  }, [fetchStatus]);

  return (
    <div className="not-found">
      <div className="weather__search-box">
        <input
          type="text"
          className="search-box__input"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="not-found__container">
        <Link className="not-found__heading" to="/">
          Go to menu
        </Link>
      </div>
    </div>
  );
}
