import CardForm from './card_form';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  createCard: () => dispatch(CardActions.createCard()),
  updateCard: card => dispatch(CardActions.updateCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
