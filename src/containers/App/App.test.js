import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  var header = <header className="App-header">
                <h1 className="App-title">React HackerNews</h1>
              </header>;
  expect(wrapper.contains(header)).toEqual(true);
});