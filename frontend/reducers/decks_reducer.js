import { DeckConstants, DeckActions } from '../actions/deck_actions';
import merge from 'lodash/merge';

const DecksReducer = (state = {}, action) => {
  let nextState;

  switch (action.type) {
    case (DeckConstants.RECEIVE_DECKS):
      return action.decks;

    case (DeckConstants.RECEIVE_DELETED_DECK):
      nextState = merge({}, state);
      delete nextState[action.deck.id];
      return nextState;

    case (DeckConstants.RECEIVE_CREATED_DECK):
      nextState = merge({}, state, action.deck);
      return nextState;

    default:
      return state;
  }
};

export default DecksReducer;
