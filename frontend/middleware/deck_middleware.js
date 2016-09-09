import { DeckConstants, DeckActions } from '../actions/deck_actions';
import DeckAPIUtil from '../util/deck_api_util';

const DeckMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error;

  switch (action.type) {
    case (DeckConstants.REQUEST_DECKS):
      success = decks => dispatch(DeckActions.receiveDecks(decks));
      error = () => console.log('error with fetching decks');
      DeckAPIUtil.fetchDecks(success, error);
      return next(action);
      
    case (DeckConstants.DELETE_DECK):
      success = deck => dispatch(DeckActions.receiveDeletedDeck(deck));
      error = () => console.log('error with deleting deck');
      DeckAPIUtil.deleteDeck(action.deckId, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default DeckMiddleware;
