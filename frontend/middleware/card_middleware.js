import { CardConstants, CardActions } from '../actions/card_actions';
import CardAPIUtil from '../util/card_api_util';

const CardMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error;

  switch (action.type) {
    case (CardConstants.REQUEST_CARDS):
      success = cards => dispatch(CardActions.receiveCards(cards));
      error = () => console.log('error with fetching cards');
      CardAPIUtil.fetchCards(action.deckId, success, error);
      return next(action);

    case (CardConstants.UPDATE_MASTERY):
      success = card => dispatch(CardActions.receiveUpdatedMastery(card));
      error = () => console.log('error with updating mastery level');
      CardAPIUtil.updateMastery(action.id, action.mastery, success, error);
      return next(action);

    case (CardConstants.DELETE_CARD):
      success = card => dispatch(CardActions.receiveDeletedCard(card));
      error = () => console.log('error with deleting card');
      CardAPIUtil.deleteCard(action.id, success, error);
      return next(action);

    case (CardConstants.UPDATE_CARD):
      success = card => dispatch(CardActions.receiveUpdatedCard(card));
      error = () => console.log('error with updating card');
      CardAPIUtil.updateCard(action.card, success, error);
      return next(action);

    case (CardConstants.CREATE_CARD):

      success = card => dispatch(CardActions.receiveCreatedCard(card));
      error = () => console.log('error with creating card');
      CardAPIUtil.createCard(action.card, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default CardMiddleware;
