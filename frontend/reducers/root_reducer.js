import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardsReducer from './cards_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardsReducer
});

export default RootReducer;
