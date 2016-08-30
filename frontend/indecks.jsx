import React from 'react';
import ReactDOM from 'react-dom';
import SessionApiUtil from './util/session_api_util';
import { SessionActions } from './actions/session_actions';
import SessionMiddleware from './middleware/session_middleware';

document.addEventListener("DOMContentLoaded", () => {
  window.SessionApiUtil = SessionApiUtil;
  window.SessionActions = SessionActions;
  window.SessionMiddleware = SessionMiddleware; 
});
