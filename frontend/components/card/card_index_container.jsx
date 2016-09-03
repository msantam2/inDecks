import CardIndex from './card_index';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(CardActions.requestCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
