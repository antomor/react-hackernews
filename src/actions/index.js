import fetch from 'cross-fetch';

export const REQUEST_STORIES = 'REQUEST_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_POSTS';
export const INVALIDATE_STORY_TYPE = 'INVALIDATE_STORY_TYPE';

export const STORIES_TOP = 'top';
export const STORIES_NEW = 'new';
export const STORIES_BEST = 'best';

export const SELECT_STORY_TYPE = 'SELECT_STORIES_TYPE'

export function changeStoriesType(storiesType) {
  return {
    type: SELECT_STORY_TYPE,
    storiesType
  }
}


function requestStories(storiesType) {
  return {
    type: REQUEST_STORIES,
    storiesType
  }
}

function receiveStories(storiesType, json) {
  return {
    type: RECEIVE_STORIES,
    storiesType,
    posts: json,
    receivedAt: Date.now()
  }
}

function getStoryFromId(id) {
  const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  return fetch(url)
      .then(response => response.json());
}

function fetchStories(type) {
  return dispatch => {
    dispatch(requestStories(type))
    const url = `https://hacker-news.firebaseio.com/v0/${type}stories.json`;
    return fetch(url)
      .then(response => response.json())
      .then( response => {
        var all = response.slice(0, 20).map( id => getStoryFromId(id));
        return Promise.all(all);
      })
      .then(json => dispatch(receiveStories(type, json)))
  }
}

function shouldFetchStories(state, type) {
  const stories = state.hackerNewsStories[type];
  if (!stories) {
    return true
  } else if (stories.isFetching) {
    return false
  } else {
    return stories.didInvalidate
  }
}

export function fetchStoriesIfNeeded(type = 'top') {
  return (dispatch, getState) => {
    if (shouldFetchStories(getState(), type)) {
      return dispatch(fetchStories(type))
    } else {
      return Promise.resolve();
    }
  }
}