/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { apiParams, apiSetup } from 'api';
import SearchContainer from '../SearchContainer';
import { getQueryParams } from '../queryParams.helper';

class MonthlyConsumer extends Component {
  state = Object.assign(apiSetup, getQueryParams());

  onChange = ({ target: { name, value } }) => {
    console.log(`${name}: ${value}`);

    this.setState(state => ({
      [name]: Object.assign(state[name], { value }),
    }));
  }

  render() {
    return (
      <SearchContainer>
        {apiParams.map(param => (
          <fieldset key={param}>
            <label htmlFor={param}>{apiSetup[param].label}</label>
            <input
              id={param}
              placeholder={apiSetup[param].label || param}
              name={param}
              type={apiSetup[param].type}
              value={this.state[param].value}
              hidden={apiSetup[param].hidden}
              onChange={this.onChange}
            />
          </fieldset>
        ))}
      </SearchContainer>
    );
  }
}

export default MonthlyConsumer;
