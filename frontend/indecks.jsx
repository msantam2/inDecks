import React from 'react';
import ReactDOM from 'react-dom';
import SessionApiUtil from './util/session_api_util';
import { SessionActions } from './actions/session_actions';
import SessionMiddleware from './middleware/session_middleware';
import SessionReducer from './reducers/session_reducer';
import Root from './components/root';
import configureStore from './store/store';
// window.SessionApiUtil = SessionApiUtil;
// window.SessionActions = SessionActions;
// window.SessionMiddleware = SessionMiddleware;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store; 
  ReactDOM.render(<Root store={store} />, root);
});
