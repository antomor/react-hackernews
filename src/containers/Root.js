import React, { Component } from 'react';
import configureStore from '../configureStore';
import App from './App/App';

import { Provider } from 'react-redux';

import {fetchStoriesIfNeeded} from '../actions';

const store = configureStore();

class Root extends Component {
  render(){
    return(
      <Provider store={store}> 
          <App />
      </Provider>
    );
  }
}

store
  .dispatch(fetchStoriesIfNeeded());

export default Root;