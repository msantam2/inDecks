import { CardConstants, CardActions } from '../actions/card_actions';
import merge from 'lodash/merge';

const CardReducer = (state, action) => {
  switch(action.type) {
    case (CardConstants.RECEIVE_UPDATED_MASTERY):

      let updatedMasteryCard = merge({}, state);
      updatedMasteryCard['mastery'] = action.card.mastery;
  
      return updatedMasteryCard;
    default:
      return state;
  }
};

export default CardReducer;
