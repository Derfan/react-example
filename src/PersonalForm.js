import React, { Component } from "react";
import "./PersonalForm.css";

export default class PersonalForm extends Component {
  handleChangeForm = e =>
    this.props.onChangeForm(e.target.name, e.target.value);

  render() {
    return (
      <div className="personal-form">
        <h1 className="title">Персональная информация</h1>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First name"
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last name"
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChangeForm}
          placeholder="Email"
        />
      </div>
    );
  }
}
