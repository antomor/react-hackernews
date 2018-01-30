import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Root />);
});