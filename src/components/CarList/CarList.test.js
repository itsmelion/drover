/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import CarList from './CarList';
import mock from './list.mockdata';

const wrapper = render(<CarList list={mock} />);
const list = wrapper.find('li');
const make = wrapper.find('h4');

it('renders a instance of CarItem', () => {
  expect(list.length).toEqual(1);
  expect(make.text()).toEqual('Aygo X-Play - 1.0');
});
