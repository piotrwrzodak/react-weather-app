import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Weather({ props, dateBuilder, query, setQuery }) {
  let { cityId } = useParams();
  const { fetchApi } = props;

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      props.changePath(`/react-weather-app/${query}`);
      setQuery('');
    }
  };

  useEffect(() => {
    fetchApi(cityId);
  }, [fetchApi, cityId]);

  return (
    <>
      {props.weather?.id && (
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
              {props.weather.name}, {props.weather.sys.country}
            </div>
            <div className="general-info__date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather__info">
            <div className="info__temperature">
              {Math.round(props.weather.main.temp)}°C
            </div>
            <div className="info__weather">{props.weather.weather[0].main}</div>
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
