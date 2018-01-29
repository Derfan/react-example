import React, { Component } from "react";
import("./NewsPost.css");

class NewsPost extends Component {
  render() {
    const { text } = this.props;

    return <p className="news-post">{text}</p>;
  }
}

export default NewsPost;
