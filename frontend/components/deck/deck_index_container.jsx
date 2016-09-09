import DeckIndex from './deck_index';
import { DeckConstants, DeckActions } from '../../actions/deck_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  decks: state.decks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestDecks: () => dispatch(DeckActions.requestDecks()),
  createDeck: deck => dispatch(DeckActions.createDeck(deck)),
  deleteDeck: deckId => dispatch(DeckActions.deleteDeck(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
