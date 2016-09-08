import DeckEditForm from './deck_edit_form';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    cards: state.cards,
    deckId: ownProps.params.deckId
  });
};

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(CardActions.requestCards()),

  deleteCard: id => dispatch(CardActions.deleteCard(id)),

  updateCard: card => dispatch(CardActions.updateCard(card)),

  createCard: card => dispatch(CardActions.createCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckEditForm);
