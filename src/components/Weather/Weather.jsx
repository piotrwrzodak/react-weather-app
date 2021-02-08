import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export function Weather({ props, dateBuilder, query, setQuery }) {
  let { cityId } = useParams();
  const history = useHistory();
  const { fetchApi } = props;

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/current-weather/${query}`);
    }
  };

  useEffect(() => {
    fetchApi(cityId);
  }, [fetchApi, cityId]);

  return (
    <>
      {props.weather.id && (
        <div>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleKeyPress}
            ></input>
          </div>
          <div>
            <div className="location-box">
              <div className="location">
                {props.weather.name}, {props.weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(props.weather.main.temp)}°C
              </div>
              <div className="weather">{props.weather.weather[0].main}</div>
              {/* <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                ></img>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
