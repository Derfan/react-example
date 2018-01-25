import React, { Component, Fragment } from "react";
import NewsPost from "./NewsPost";
import("./App.css");

class App extends Component {
  state = {
    value: "",
    news: []
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleClick = e => {
    e.preventDefault();

    let { value, news } = this.state;

    news.push(value);
    this.setState({ news });
    this.setState({ value: "" });
  };
  render() {
    let { value, news } = this.state;
    return (
      <Fragment>
        <NewsPost news={news} />
        <div className="input-wrapper">
          <input
            className="todo-input"
            type="text"
            placeholder="Какие новости?"
            onChange={this.handleChange}
            value={value}
          />
          <button
            className={!value ? "todo-button disabled" : "todo-button"}
            onClick={this.handleClick}
          >
            Создать новость
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
