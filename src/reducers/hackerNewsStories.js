import {
  REQUEST_STORIES,
  RECEIVE_STORIES,
  INVALIDATE_STORY_TYPE
} from '../actions';

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

export default hackerNewsStories;