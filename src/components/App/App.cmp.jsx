import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Weather } from '../Weather';
import { Home } from '../Home';
import { dateBuilder } from '../../services/dateBuilder';

export function App(props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log(props.weather);
  }, [props]);

  return (
    <BrowserRouter>
      <div
        className={
          props.weather.main
            ? props.weather.main.temp > 16
              ? 'app'
              : 'app app--cold'
            : 'app'
        }
      >
        <Switch>
          <Route exact path="/">
            <Home query={query} setQuery={setQuery} />
          </Route>
          <Route path="/current-weather/:cityId">
            <Weather
              dateBuilder={dateBuilder}
              props={props}
              query={query}
              setQuery={setQuery}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
