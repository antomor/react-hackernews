import { combineReducers } from 'redux';
import hackerNewsStories from './hackerNewsStories';
import selectedStoryType from './selectedStoryType';

const rootReducer = combineReducers({
    hackerNewsStories,
    selectedStoryType
})

export default rootReducer