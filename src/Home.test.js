import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const wrapper = shallow(<Home
  linkValue=''
  isUri={false}
  isLink={false}
  isOpenLink={false}
  isPlayLink={false}
  isIframe={false}
  isValid={false}
  handleInputChange={() => {}}
  processLink={() => {}}
  />);

test('renders without crashing', () => {
  expect(wrapper.length).toBe(1);
});
