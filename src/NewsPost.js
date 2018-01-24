import React, { Component } from "react";
import("./NewsPost.css");

class NewsPost extends Component {
  render() {
    let { news } = this.props;
    return (
      <div className="todo-container">
        {!news || !news.length ? (
          <p>Новостей пока нет...</p>
        ) : (
          news.map((el, i) => {
            return (
              <p key={i} className="news-post">
                {el}
              </p>
            );
          })
        )}
      </div>
    );
  }
}

export default NewsPost;
