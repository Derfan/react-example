import React, { Component, Fragment } from "react";
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
    let { newsInput, news } = this.state;
    const isNews = !news || !news.length;

    return (
      <Fragment>
        {isNews ? <p>Новостей пока нет...</p> : <NewsPost news={news} />}
        <div className="input-wrapper">
          <input
            className="todo-input"
            type="text"
            placeholder="Какие новости?"
            onChange={this.handleChange}
            value={newsInput}
          />
          <button
            className={!newsInput ? "todo-button disabled" : "todo-button"}
            onClick={this.handleNewPost}
          >
            Создать новость
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
