import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import authContext from './context/authContext';
import App from './views/App';
import Homepage from './views/homepage';

function Router() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <authContext.Provider
        value={{
          token,
          setToken,
        }}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/app" component={App} />
        </Switch>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
