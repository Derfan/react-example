import React, { Component } from "react";
import "./PersonalForm.css";

export default class PersonalForm extends Component {
  handleChangeForm = e =>
    this.props.onChangeForm(e.target.name, e.target.value);

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form">
        <h1 className="title">Персональная информация</h1>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChangeForm}
          value={firstName}
          placeholder="First name"
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChangeForm}
          value={lastName}
          placeholder="Last name"
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChangeForm}
          value={email}
          placeholder="Email"
        />
      </div>
    );
  }
}
