import React from 'react';
import { useHistory } from 'react-router-dom';

export function Home({ query, setQuery }) {
  const history = useHistory();

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/react-weather-app/${query}`);
      setQuery('');
    }
  };

  return (
    <div className="home">
      <div className="home__heading">
        <h1 className="home__heading--one">Weather App</h1>
        <h3 className="home__heading--two">
          Check current weather in any place in the world!
        </h3>
      </div>
      <div className="home__search-box">
        <input
          type="text"
          className="search-box__input"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
    </div>
  );
}
