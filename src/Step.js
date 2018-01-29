import React, { Component } from "react";
import classNames from "classnames";
import "./Step.css";

export default class Step extends Component {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;

    isClickable && onClick(number);
  };

  render() {
    const { number, children, isClickable, isSelected } = this.props;

    return (
      <div
        onClick={this.handleClick}
        className={classNames(
          "step",
          { "step-clickable": isClickable },
          { "step-selected": isSelected }
        )}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}
