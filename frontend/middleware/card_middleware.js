import { CardConstants, CardActions } from '../actions/card_actions';
import CardAPIUtil from '../util/card_api_util';

const CardMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case (CardConstants.REQUEST_CARDS):
      let requestCardsSuccess = cards => dispatch(CardActions.receiveCards(cards));
      let requestCardsError = () => console.log('error with fetching cards');
      CardAPIUtil.fetchCards(requestCardsSuccess, requestCardsError);
      return next(action);
    case (CardConstants.UPDATE_MASTERY):
      let updateMasterySuccess = card => dispatch(CardActions.receiveUpdatedMastery(card));
      let updateMasteryError = () => console.log('error with updating mastery level');
      CardAPIUtil.updateMastery(action.id, action.mastery, updateMasterySuccess, updateMasteryError);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
