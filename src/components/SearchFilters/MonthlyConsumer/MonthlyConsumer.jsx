/* eslint-disable jsx-a11y/label-has-for, react/destructuring-assignment */
import axios from 'axios';
import React, { PureComponent } from 'react';
import { apiParams, apiSetup } from 'api';
import SearchContainer from '../SearchContainer';

class MonthlyConsumer extends PureComponent {
  state = this.props.initialState;

  signal = axios.CancelToken.source();

  componentDidUpdate() {
    this.props.search(this.state, { cancelToken: this.signal.token });
  }

  componentWillUnmount() {
    this.signal.cancel();
  }

  onChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  render() {
    return (
      <SearchContainer>
        {apiParams.map(param => (
          <fieldset flex="none" key={param} disabled={apiSetup[param].disabled}>
            <label className="mv05" htmlFor={param}>{apiSetup[param].label}</label>

            <input
              id={param}
              placeholder={apiSetup[param].label || param}
              name={param}
              type={apiSetup[param].type}
              value={this.state[param]}
              hidden={apiSetup[param].hidden}
              onChange={this.onChange}
              disabled={apiSetup[param].disabled}
            />
          </fieldset>
        ))}
      </SearchContainer>
    );
  }
}

export default MonthlyConsumer;
