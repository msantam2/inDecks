import DeckIndex from './deck_index';
import { DeckConstants, DeckActions } from '../../actions/deck_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    decks: state.decks,
    authorId: ownProps.params.authorId
  });
};

const mapDispatchToProps = dispatch => ({
  requestDecks: () => dispatch(DeckActions.requestDecks()),
  createDeck: deck => dispatch(DeckActions.createDeck(deck)),
  deleteDeck: deck => dispatch(DeckActions.deleteDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
