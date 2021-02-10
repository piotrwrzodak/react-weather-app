import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Weather } from '../Weather';
import { Home } from '../Home';
import { NotFound } from '../NotFound';
import { dateBuilder } from '../../services/dateBuilder';

export function App(props) {
  const [query, setQuery] = useState('');

  return (
    <BrowserRouter>
      <div className={10 > new Date().getMonth() > 4 ? 'app' : 'app app--cold'}>
        <Switch>
          <Route exact path="/react-weather-app">
            <Home query={query} setQuery={setQuery} />
          </Route>
          <Route path="/react-weather-app/:cityId">
            <Weather
              dateBuilder={dateBuilder}
              props={props}
              query={query}
              setQuery={setQuery}
            />
          </Route>
          <Route path="/react-weather-app/place-not-found">
            <NotFound />
          </Route>
          <Redirect to="/react-weather-app" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
