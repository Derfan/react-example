import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthorized, authorizeUser } from "./AuthorizeApi";

export default class Auth extends Component {
  state = { isError: false, email: "", password: "", isAuthorized };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const isValid = authorizeUser(email, password);

    this.setState({
      isError: !isValid,
      isAuthorized: isValid
    });
  };

  render() {
    const { isError, isAuthorized } = this.state;

    return (
      <div>
        {isAuthorized && <Redirect from="/auth" to="/" />}
        <div>
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
          <input
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
          {isError && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
