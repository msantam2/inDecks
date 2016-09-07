import CardForm from './card_form';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(CardActions.requestCards()),

  deleteCard: id => dispatch(CardActions.deleteCard(id)),

  updateCard: card => dispatch(CardActions.updateCard(card)),

  createCard: card => dispatch(CardActions.createCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
