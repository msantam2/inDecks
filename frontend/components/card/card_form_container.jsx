import CardForm from './card_form';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(CardActions.requestCards()),

  createCard: () => dispatch(CardActions.createCard()),

  updateQuestion: card => dispatch(CardActions.updateQuestion(card)),

  updateAnswer: card => dispatch(CardActions.updateAnswer(card)),
  
  deleteCard: id => dispatch(CardActions.deleteCard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
