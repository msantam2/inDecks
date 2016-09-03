import { CardConstants, CardActions } from '../actions/card_actions';
import CardAPIUtil from '../util/card_api_util';

const CardMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type);
  console.log(CardConstants.REQUEST_CARDS);
  console.log(CardAPIUtil);
  switch (action.type) {
    case (CardConstants.REQUEST_CARDS):
      const success = cards => dispatch(CardActions.receiveCards(cards));
      const error = () => console.log('error with fetching cards');
      CardAPIUtil.fetchCards(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
