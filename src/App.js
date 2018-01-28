import React, { Component } from "react";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";
import "./App.css";

export default class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: ""
  };

  handleTabClick = val =>
    this.setState({
      step: val
    });

  handleChangeForm = (state, value) => {
    this.setState(() => ({ [state]: value }));
  };

  handleClickNextForm = () => {
    this.setState(({ step }) => ({
      step: step + 1
    }));
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        );

      case 2:
        return cardNumber.length === 16;

      case !(1 | 2):
        return false;

      default:
        break;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );

      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );

      case 3:
        return "Поздравляем!";

      default:
        break;
    }
  };

  render() {
    const { step } = this.state;
    const titles = ["Personal information", "Card information", "Finish"];

    return (
      <div className="container">
        <div className="tab-panel">
          {titles.map((elem, i) => {
            return (
              <Step
                key={elem}
                number={i + 1}
                children={elem}
                isClickable={step > i + 1}
                isSelected={step === i + 1}
                onClick={this.handleTabClick}
              />
            );
          })}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
