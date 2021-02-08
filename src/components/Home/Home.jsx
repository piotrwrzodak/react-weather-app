import React from 'react';
import { useHistory } from 'react-router-dom';

export function Home({ query, setQuery }) {
  const history = useHistory();

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/current-weather/${query}`);
    }
  };

  return (
    <div>
      <div className="logo">
        <h1>Weather App</h1>
        <h3>Check current weather in any place in the world!</h3>
      </div>
      <div className="search-box main">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
    </div>
  );
}
