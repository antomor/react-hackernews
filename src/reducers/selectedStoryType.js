import {
  SELECT_STORY_TYPE
} from '../actions';

function selectedStoryType(state = 'top', action) {
  switch (action.type) {
    case SELECT_STORY_TYPE:
      return action.storiesType
    default:
      return state
  }
}

export default selectedStoryType;