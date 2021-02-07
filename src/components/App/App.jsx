import React, { useState } from 'react';

import { Weather } from '../Weather';
import { Home } from '../Home';
import { dateBuilder } from '../../services/dateBuilder';

const api = {
  key: '47da0b083f4ecbe8d6c74fb7453b40b5',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery('');
          setWeather(result);
        });
    }
  };

  return (
    <div
      className={
        weather.main ? (weather.main.temp > 16 ? 'App' : 'App cold') : 'App'
      }
    >
      <main>
        {weather.main ? (
          <Weather
            query={query}
            search={search}
            weather={weather}
            setQuery={setQuery}
            dateBuilder={dateBuilder}
          />
        ) : (
          <Home query={query} search={search} setQuery={setQuery} />
        )}
      </main>
    </div>
  );
}
