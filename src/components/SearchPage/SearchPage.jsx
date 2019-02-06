import React, { PureComponent } from 'react';
import { debounce } from 'lodash';
import { search, apiRequest } from 'api';
import queryString from 'query-string';
import CarList from 'components/CarList/CarList';
import MonthlyConsumer from 'components/SearchFilters/MonthlyConsumer/MonthlyConsumer';

class SearchPage extends PureComponent {
  state = { list: [] };

  // eslint-disable-next-line no-restricted-globals
  initialQuery = { ...apiRequest, ...queryString.parse(location.search) };

  search = debounce(
    (params, options) => this.fetchData(params, options),
    1000,
  );

  componentDidMount() {
    this.fetchData(this.initialQuery);
  }

  fetchData(params, options) {
    return search(params, options)
      .then(({ data: list }) => this.setState(({ list })));
  }

  render() {
    const { list } = this.state;

    return (
      <main id="SearchPage" className="row nowrap mobile-wrap contain">
        <MonthlyConsumer initialState={this.initialQuery} search={this.search} />
        <CarList list={list} />
      </main>
    );
  }
}

export default SearchPage;
