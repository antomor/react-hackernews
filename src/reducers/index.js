import { combineReducers } from 'redux'
import {
  REQUEST_STORIES,
  RECEIVE_STORIES,
  INVALIDATE_STORY_TYPE,
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

function stories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function hackerNewsStories(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_STORY_TYPE:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case RECEIVE_STORIES:
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        [action.storiesType]: stories(state[action.storiesType], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    hackerNewsStories,
    selectedStoryType
})

export default rootReducer