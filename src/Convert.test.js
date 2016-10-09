import React from 'react';
import { shallow } from 'enzyme';
import Convert from './Convert';

const wrapper = shallow(<Convert params={{ value: 'test' }} />);

test('renders without crashing', () => {
  expect(wrapper.length).toBe(1);
});
