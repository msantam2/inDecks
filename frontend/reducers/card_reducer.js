import { CardConstants, CardActions } from '../actions/card_actions';
import merge from 'lodash/merge';

const CardReducer = (state = {}, action) => {
  switch (action.type) {
    case (CardConstants.RECEIVE_CARDS):
      return action.cards;
    default:
      return state;
  }
};

export default CardReducer;
