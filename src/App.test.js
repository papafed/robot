import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

});