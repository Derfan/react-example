import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ModalButton.css";

class ModalWindow extends Component {
  getModal = () => {
    const { onClick } = this.props;

    return (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={onClick}>Close</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return ReactDOM.createPortal(
      this.getModal(),
      document.getElementById("portal")
    );
  }
}

export default class ModalButton extends Component {
  state = { isModal: false };

  handleClick = () => {
    const { isModal } = this.state;

    this.setState({ isModal: !isModal });
  };

  render() {
    const { isModal } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Show modal!</button>
        {isModal && <ModalWindow onClick={this.handleClick} />}
      </div>
    );
  }
}
