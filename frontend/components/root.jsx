import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/app_router';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default Root;
