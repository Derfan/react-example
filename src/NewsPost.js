import React, { Component } from "react";
import("./NewsPost.css");

class NewsPost extends Component {
  render() {
    const { news } = this.props;

    return (
      <div className="todo-container">
        {news.map((el, i) => {
          return (
            <p key={el + i} className="news-post">
              {el}
            </p>
          );
        })}
      </div>
    );
  }
}

export default NewsPost;
