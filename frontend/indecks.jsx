import React from 'react';
import ReactDOM from 'react-dom';
import SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.SessionApiUtil = SessionApiUtil; 
});
