import React, { Component } from "react";
import "./CardForm.css";

export default class CardForm extends Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const { name, value } = e.target;

    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;

    return (
      <div className="card-form">
        <h1 className="title">Номер карты</h1>
        <input
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
          placeholder="***************"
        />
      </div>
    );
  }
}
