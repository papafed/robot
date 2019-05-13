import React from 'react';

import Robot from './robot';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Robot tests', () => {
  it("Robot renders correctly", () => {
    const wrapper = shallow(<Robot />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Robot speaks.", () => {
    const wrapper = shallow(<Robot x={1} y={1} direction={'NORTH'} speaking={true} />);
    expect(wrapper.find('.bubble').exists()).toBe(true);
  });


  it("Robot reports error.", () => {
    const wrapper = shallow(<Robot x={1} y={1} direction={'NORTH'} error={true} />);
    expect(wrapper.find('.error').exists()).toBe(true);
  });

});