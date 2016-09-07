import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CardMiddleware from './card_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  loggerMiddleware, 
  SessionMiddleware,
  CardMiddleware
);

export default RootMiddleware;
