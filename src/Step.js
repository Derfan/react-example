import React, { Component } from "react";
import "./Step.css";

export default class Step extends Component {
  getClassList() {
    const { isClickable, isSelected } = this.props;
    let classList = "step";

    if (isClickable) {
      classList += " step-clickable";
    }
    if (isSelected) {
      classList += " step-selected";
    }

    return classList;
  }

  handleClick = () => {
    const { isClickable, onClick, number } = this.props;

    return isClickable ? onClick(number) : null;
  };

  render() {
    const { number, children } = this.props;

    return (
      <div onClick={this.handleClick} className={this.getClassList()}>
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}
