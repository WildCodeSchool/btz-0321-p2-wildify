import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import authContext from './context/authContext';
import App from './views/App';
import Homepage from './views/homepage';
import Login from './views/login';
import Register from './views/register';

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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/app" component={App} />
        </Switch>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
