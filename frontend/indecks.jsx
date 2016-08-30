import React from 'react';
import ReactDOM from 'react-dom';
import SessionApiUtil from './util/session_api_util';
import { SessionActions } from './actions/session_actions';
import SessionMiddleware from './middleware/session_middleware';
import SessionReducer from './reducers/session_reducer';
import Root from './components/root';

window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;
window.SessionMiddleware = SessionMiddleware;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // ReactDOM.render(<Root store={store} />, root);
});
