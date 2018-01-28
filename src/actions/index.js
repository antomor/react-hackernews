import fetch from 'cross-fetch'

export const REQUEST_STORIES = 'REQUEST_STORIES'
export const RECEIVE_STORIES = 'RECEIVE_POSTS'

function requestStories() {
  return {
    type: REQUEST_STORIES
  }
}

function receiveStories(json) {

  return {
    type: RECEIVE_STORIES,
    posts: json,
    receivedAt: Date.now()
  }
}

function fetchStories() {
  return dispatch => {
    dispatch(requestStories())
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    return fetch(url)
      .then(response => response.json())
      .then( response => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(response);
            }, 1000);            
        });
      })
      .then(json => dispatch(receiveStories(json)))
  }
}

function shouldFetchStories(state) {
  const posts = state.posts
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchStoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchStories(getState())) {
      return dispatch(fetchStories())
    }
  }
}