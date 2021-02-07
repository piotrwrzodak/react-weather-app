import React from 'react';

export function Home({ query, search, setQuery }) {
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
          onKeyPress={search}
        ></input>
      </div>
    </div>
  );
}
