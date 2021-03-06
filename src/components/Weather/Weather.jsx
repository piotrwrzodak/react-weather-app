import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { NotFound } from '../NotFound';

export function Weather({ props, dateBuilder, query, setQuery }) {
  let { cityId } = useParams();
  const { fetchApi } = props;
  const history = useHistory();

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/${query}`);
      setQuery('');
    }
  };

  useEffect(() => {
    fetchApi(cityId);
  }, [fetchApi, cityId]);

  return (
    <>
      {props.error ? (
        <NotFound />
      ) : (
        props.weather?.id && (
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
              <div className="general-info__date">
                {dateBuilder(new Date())}
              </div>
            </div>
            <div className="weather__info">
              <div className="info__temperature">
                {Math.round(props.weather.main.temp)}°C
              </div>
              <div className="info__weather">
                {props.weather.weather[0].main}
              </div>
              {/* <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                ></img>
              </div> */}
            </div>
          </div>
        )
      )}
    </>
  );
}
