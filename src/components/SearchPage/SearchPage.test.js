/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { endpoint } from 'api';
import SearchPage from './SearchPage';

const wrapper = shallow(<SearchPage />);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

it('Deals properly with initial state', (done) => {
  moxios.stubRequest(endpoint, {
    status: 200,
    response: { data: [{}, {}] }, // Mock 2 items in list;
  });

  const query = wrapper.instance().initialQuery;

  expect(wrapper.instance().initialQuery.vehicle_type).toEqual('Consumer');

  // fetches data and update state to match the list length
  wrapper.instance().fetchData(query).then(() => {
    expect(wrapper.instance().state.list.length).toEqual(2);
    done();
  });
});
