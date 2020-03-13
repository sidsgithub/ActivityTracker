import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from './App';
import Login from './features/login';
import report from './features/Report/report';
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
              <Route path="/report" component={report}  exact/>
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
