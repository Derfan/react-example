import React, { Component } from "react";
import { isAuthorized, authorizeUser } from "./AuthorizeApi";

export default class Auth extends Component {
  state = { isError: false, email: "", password: "", isAuthorized };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;

    this.setState({
      isError: !authorizeUser(email, password),
      isAuthorized: authorizeUser(email, password)
    });
  };

  render() {
    const { isError } = this.state;

    return (
      <div>
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
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
