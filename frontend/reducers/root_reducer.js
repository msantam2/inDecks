import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardsReducer from './cards_reducer';
import DecksReducer from './decks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardsReducer,
  decks: DecksReducer
});

export default RootReducer;
