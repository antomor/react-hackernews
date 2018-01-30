import React from 'react';
import ReactDOM from 'react-dom';
import {StoryListContainer} from './StoryListContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const storyList = [
    {
      id: 1,
      url: '',
      title: ''
    },
    {
      id: 2,
      url: '',
      title: ''
    }
  ];
  const wrapper = shallow(<StoryListContainer items={storyList}/>);
});