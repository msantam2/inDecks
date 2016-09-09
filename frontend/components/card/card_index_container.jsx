import CardIndex from './card_index';
import { CardConstants, CardActions } from '../../actions/card_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    cards: state.cards,
    deckId: ownProps.params.deckId
  });
};

const mapDispatchToProps = dispatch => ({
  requestCards: deckId => dispatch(CardActions.requestCards(deckId)),

  updateMastery: card => dispatch(CardActions.updateMastery(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
