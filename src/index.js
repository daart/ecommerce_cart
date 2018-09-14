import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { store } from './stores';
import { appStore } from './stores/app.store';
import { app } from './firebase';

const rootComponent = (
  <Provider appStore={appStore} >
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  rootComponent,
  document.getElementById('root'));
registerServiceWorker();
