import React from 'react';
import ReactDOM from 'react-dom';
import Story from './Story';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const story = {
    url: '',
    title: '' 
  };
  const wrapper = shallow(<Story item={story}/>);
});