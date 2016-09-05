import { CardConstants, CardActions } from '../actions/card_actions';
import merge from 'lodash/merge';
import CardReducer from './card_reducer';

const CardsReducer = (state = {}, action) => {
  switch (action.type) {
    case (CardConstants.RECEIVE_CARDS):
      return action.cards;
    case (CardConstants.RECEIVE_UPDATED_MASTERY):
      let nextState = merge({}, state);
      nextState[action.card.id] = CardReducer(nextState[action.card.id], action);
      return nextState;
    default:
      return state;
  }
};

export default CardsReducer;
