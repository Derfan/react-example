import React, { Component } from "react";
import "./Switcher.css";

export default class Switcher extends Component {
  state = { selectedChild: 0 };

  title = ["VideoPlayer", "Card number formating", "ModalButton"];

  handlerClick = e => {
    this.setState({ selectedChild: e.target.dataset.id });
  };

  getComponent = () => {
    const { children } = this.props;
    const { selectedChild } = this.state;
    const childrenArray = React.Children.toArray(children);

    return childrenArray[selectedChild];
  };

  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {this.title.map((element, index) => {
              return (
                <li
                  key={element + index}
                  className="component-list__name"
                  data-id={index}
                  onClick={this.handlerClick}
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{this.getComponent()}</div>
      </div>
    );
  }
}
