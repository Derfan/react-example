import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends PureComponent {
  render() {
    const { id, image, name, summary } = this.props.item;
    return (
      <div className="card">
        <div className="card__header">
          <Link className="t-link" to={`/shows/${id}`}>
            {name}
          </Link>
        </div>
        {image && image.medium && <img src={image.medium} alt={name} />}
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    );
  }
}

export default Card;
