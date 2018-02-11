import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from '../Search/Search.js';
import ShowPage from '../ShowPage/ShowPage.js';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
