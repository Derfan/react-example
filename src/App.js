import React, { Component } from "react";
import NewsPost from "./NewsPost";
import("./App.css");

class App extends Component {
  state = {
    newsInput: "",
    news: []
  };

  handleChange = e => this.setState({ newsInput: e.target.value });

  handleNewPost = e => {
    e.preventDefault();

    let { newsInput, news } = this.state;

    this.setState({ news: [...news, newsInput], newsInput: "" });
  };

  render() {
    const { newsInput, news } = this.state;
    const isDisabled = newsInput !== "";
    const isNews = !news || !news.length;

    return (
      <div className="App">
        <div className="input-wrapper">
          <input
            className="todo-input"
            type="text"
            placeholder="Какие новости?"
            onChange={this.handleChange}
            value={newsInput}
          />
          <button
            className="todo-button"
            onClick={this.handleNewPost}
            disabled={!isDisabled}
          >
            Создать новость
          </button>
        </div>
        <div className="todo-container">
          {!isNews &&
            news.map((item, i) => <NewsPost key={item + i} text={item} />)}
        </div>
      </div>
    );
  }
}

export default App;
