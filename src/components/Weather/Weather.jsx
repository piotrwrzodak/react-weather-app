import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useQuery from '../useQuery';

export function Weather({ props, dateBuilder, query, setQuery }) {
  let { cityId } = useParams();
  const history = useHistory();
  const { fetchApi } = props;

  const APIKEY = process.env.REACT_APP_API_KEY;

  const { weather } = useQuery({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&units=metric&appid=${APIKEY}`,
  });

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/current-weather/${query}`);
      setQuery('');
    }
  };

  // useEffect(() => {
  //   fetchApi(cityId);
  // }, [fetchApi, cityId]);

  return (
    <>
      {weather && (
        <div className="weather">
          <div className="weather__search-box">
            <input
              type="text"
              className="search-box__input"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleKeyPress}
            ></input>
          </div>

          <div className="weather__general-info">
            <div className="general-info__location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="general-info__date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather__info">
            <div className="info__temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="info__weather">{weather.weather[0].main}</div>
            {/* <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                ></img>
              </div> */}
          </div>
        </div>
      )}
    </>
  );
}
