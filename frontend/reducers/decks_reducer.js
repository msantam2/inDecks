import { DeckConstants, DeckActions } from '../actions/deck_actions';
import merge from 'lodash/merge';

const DecksReducer = (state = {}, action) => {
  switch (action.type) {
    case (DeckConstants.RECEIVE_DECKS):
      return action.decks;
    default:
      return state;
  }
};

export default DecksReducer; 
