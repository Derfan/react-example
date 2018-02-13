import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./Search.css";
import { searchRequest } from "../../actions/search";
import Card from "../Series/Card/Card.js";

export class Search extends PureComponent {
  state = { searchInput: "" };

  handleSearch = () => {
    const { searchInput } = this.state;

    this.props.boundSearchRequest(searchInput);
    this.setState({ searchInput: "" });
  };

  handleChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  render() {
    const { searchInput } = this.state;
    const { isFetching, result, error } = this.props.search;
    const isResult = result.length > 0;

    if (error !== null) {
      console.error("search", error);
      return "Возникла ошибка!";
    }

    return (
      <div>
        <div className="search-panel">
          <input
            type="text"
            placeholder="Название сериала"
            onChange={this.handleChange}
            value={searchInput}
          />
          <button onClick={this.handleSearch}>Найти</button>
        </div>
        <div className="t-search-result search-result">
          {isFetching && "Выполняется поиск..."}
          {isResult &&
            result.map(item => (
              <div key={item.id} className="t-preview search-result__item">
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = {
  boundSearchRequest: searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
