import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import postApp from './reducers';
import {fetchStoriesIfNeeded} from './actions';

const loggerMiddleware = createLogger();

let store = createStore(
    postApp,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();


store
  .dispatch(fetchStoriesIfNeeded());