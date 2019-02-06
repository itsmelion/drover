/* eslint-disable jsx-a11y/label-has-for, react/destructuring-assignment */
import axios from 'axios';
import React, { PureComponent } from 'react';
import ModeSwitcher from 'components/ModeSwitcher/ModeSwitcher';
import inputs, { inputKeys } from 'api/dynamic-inputs.data';
import SearchContainer from '../SearchContainer';

class Consumer extends PureComponent {
  state = this.props.initialState;

  signal = axios.CancelToken.source();

  componentDidUpdate() {
    // console.log(this.state.vehicle_type);
    this.props.search(this.state, { cancelToken: this.signal.token });
  }

  componentWillUnmount() {
    this.signal.cancel();
  }

  onChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  switchMode = (mode) => {
    // console.log(this.state);
    this.setState(({ vehicle_type: mode }));
  }

  render() {
    return (
      <SearchContainer>
        <ModeSwitcher mode={this.state.vehicle_type} switcher={this.switchMode} />

        {inputKeys.map(key => (
          <fieldset flex="none" key={key} disabled={inputs[key].disabled}>
            <label className="mv05" htmlFor={key}>{inputs[key].label}</label>

            <input
              id={key}
              placeholder={inputs[key].label || key}
              name={key}
              type={inputs[key].type}
              value={this.state[key]}
              hidden={inputs[key].hidden}
              onChange={this.onChange}
              disabled={inputs[key].disabled}
            />
          </fieldset>
        ))}
      </SearchContainer>
    );
  }
}

export default Consumer;
