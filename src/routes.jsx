import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
// import Home from './features/home/home';

import App from './App';
import Login from './features/login';
import Activity from './features/Activity/activity';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route
          render={() => (
            <Switch>
              <Route path="/" component={Login} exact />

              {/* add top level routes here */}
              <Route path="/activity" component={Activity}  exact/>

              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          )}
        />
      </Switch>
    </App>
  );
};

export default Routes;
