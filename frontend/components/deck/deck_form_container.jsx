import DeckForm from './deck_form';
import { DeckConstants, DeckActions } from '../../actions/deck_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(DeckActions.createDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
