import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Loading />);
  var waiting = <div>Waiting for items...</div>;
  expect(wrapper.contains(waiting)).toEqual(true);
});