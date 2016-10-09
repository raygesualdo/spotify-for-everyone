import React from 'react';
import { shallow } from 'enzyme';
import Embed from './Embed';

const wrapper = shallow(<Embed params={{ uri: 'test' }} />);

test('renders without crashing', () => {
  expect(wrapper.length).toBe(1);
});
