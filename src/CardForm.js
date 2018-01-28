import React, { Component } from "react";
import "./CardForm.css";

export default class CardForm extends Component {
  handleChangeForm = e =>
    this.props.onChangeForm(e.target.name, e.target.value);

  componentWillUnmount = () => {};

  render() {
    return (
      <div className="card-form">
        <h1 className="title">Номер карты</h1>
        <input
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          placeholder="***************"
        />
      </div>
    );
  }
}
