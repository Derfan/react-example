import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Auth";
import Private from "./Private";
import Publick from "./Public";
import Home from "./Home";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {isAuthorized ? (
            <Route path="/private" component={Private} />
          ) : (
            <Redirect from="/private" to="/auth" />
          )}
          <Route path="/auth" component={Auth} />
          <Route path="/public" component={Publick} />
          <Route exact path="/" component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
