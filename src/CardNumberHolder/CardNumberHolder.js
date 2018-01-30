import React, { Component } from "react";

export default class CardNumberHolder extends Component {
  state = { cardNumber: "" };

  formated(val) {
    return val.replace(/(\w{4})(?=(\w{1,4}))/gi, "$1 ");
  }

  handleChange = e => {
    e.target.value = this.formated(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        onChange={this.handleChange}
      />
    );
  }
}
