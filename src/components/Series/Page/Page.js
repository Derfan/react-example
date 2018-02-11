import React, { PureComponent } from 'react';
import './Page.css';

class Page extends PureComponent {
  render() {
    const { name, image, summary, _embedded } = this.props.item;
    const people = _embedded.cast;
    return (
      <div className="page">
        <div className="page__header">
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className="page__content">
          {people.map((people, index) =>
            this.renderPerson(people.person, index),
          )}
        </div>
      </div>
    );
  }

  renderPerson = (person, key) => {
    const { name, image } = person;
    return (
      <div key={key}>
        <p>{name}</p>
        {image && image.medium && <img src={image.medium} alt={name} />}
      </div>
    );
  };
}

// TODO add props

export default Page;
