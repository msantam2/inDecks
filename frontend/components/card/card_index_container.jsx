import CardIndex from './card_index';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(CardActions.requestCards()),
  
  updateMastery: (id, mastery) => dispatch(CardActions.updateMastery(id, mastery))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
