import { CardConstants, CardActions } from '../actions/card_actions';
import merge from 'lodash/merge';
import CardReducer from './card_reducer';

const CardsReducer = (state = {}, action) => {
  let nextState;

  switch (action.type) {
    case (CardConstants.RECEIVE_CARDS):
      return action.cards;

    case (CardConstants.RECEIVE_UPDATED_MASTERY):
      nextState = merge({}, state);
      nextState[action.card.id] = CardReducer(nextState[action.card.id], action);
      return nextState;

    case (CardConstants.RECEIVE_DELETED_CARD):
      nextState = merge({}, state);
      delete nextState[action.card.id];
      return nextState;

    case (CardConstants.RECEIVE_UPDATED_CARD):
      nextState = merge({}, state);
      nextState[action.card.id] = action.card;
      return nextState;

    case (CardConstants.RECEIVE_CREATED_CARD):
      const newCard = {[action.card.id]: action.card};
      return merge({}, state, newCard);

    default:
      return state;
  }
};

export default CardsReducer;
