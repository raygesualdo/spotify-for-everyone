import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

const wrapper = shallow(<HomeContainer />);

test('renders without crashing', () => {
  expect(wrapper.length).toBe(1);
});
