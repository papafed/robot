import React from 'react';

import Grid from './grid';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Grid tests', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper.exists()).toBe(true);
  });
});