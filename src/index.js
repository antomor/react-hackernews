import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)

registerServiceWorker();