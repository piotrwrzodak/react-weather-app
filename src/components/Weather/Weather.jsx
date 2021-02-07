import React from 'react';

export function Weather({ query, search, weather, setQuery, dateBuilder }) {
  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        ></input>
      </div>
      <div>
        <div className="location-box">
          <div className="location">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather">{weather.weather[0].main}</div>
          {/* <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                ></img>
              </div> */}
        </div>
      </div>
    </div>
  );
}
