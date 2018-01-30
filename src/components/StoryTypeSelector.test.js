import React from 'react';
import ReactDOM from 'react-dom';
import {StoryTypeSelector} from './StoryTypeSelector';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<StoryTypeSelector />);
});