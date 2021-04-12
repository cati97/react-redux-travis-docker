import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";
import {logger} from "./middleware/logger";
// import {alertOnclick} from "./middleware/alertOnclick";
// import {countDown} from "./middleware/countDown";

const store = createStore(
    allReducers, /* preloadedState, */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

