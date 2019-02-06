/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import CarItem from './CarItem';
import mock from './car.mockdata';

const wrapper = render(<CarItem car={mock} />);
const price = wrapper.find('h3');
const year = wrapper.find('h6');
const make = wrapper.find('h4');

it('renders core car data correctly', () => {
  expect(price.text()).toEqual('£258');
  expect(year.text()).toEqual('2018 Toyota');
  expect(make.text()).toEqual('Aygo X-Play - 1.0');
});
