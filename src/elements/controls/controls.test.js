import React from 'react';

import Controls from './controls';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Controls tests', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.exists()).toBe(true);
  });
});