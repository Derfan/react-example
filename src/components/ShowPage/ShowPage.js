import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showsRequest } from '../../actions/shows';
import Page from '../Series/Page/Page.js';

export class ShowPage extends PureComponent {
  state = {
    showsId: null,
  };

  componentDidMount() {
    const { match: { params }, shows: { entities } } = this.props;
    const showsId = Number(params.id);
    this.setState({ showsId });

    const item = entities.find(item => item.id === showsId);
    if (!item) {
      this.props.boundShowsRequest(showsId);
    }
  }

  render() {
    const { isFetching, entities, error } = this.props.shows;

    if (isFetching) {
      return 'Идёт загрузка...';
    }

    if (error !== null) {
      console.error('fetch detailed data', error);
      return 'Возникла ошибка!';
    }

    // TODO add cache for item
    const item = entities.find(item => item.id === this.state.showsId);
    if (!item) {
      console.error('find item', item);
      return 'Возникла ошибка при обработке данных!';
    }

    return <Page item={item} />;
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
});

const mapDispathToProps = {
  boundShowsRequest: showsRequest,
};

export default connect(mapStateToProps, mapDispathToProps)(ShowPage);
