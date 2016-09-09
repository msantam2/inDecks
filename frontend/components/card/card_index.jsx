import React from 'react';
import CardIndexItem from './card_index_item';
import MasteryBarIndex from './mastery_bar_index';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.masteredCardCount = this.masteredCardCount.bind(this);
  }

  masteredCardCount(cardKeys) {
    let numMastered = 0;
    let cardsLength = cardKeys.length;

    cardKeys.map(cardKey => {
      if (this.props.cards[cardKey].mastery === 5) {
        numMastered += 1;
      }
    });
    
    return `${numMastered} / ${cardsLength}`;
  }

  componentDidMount () {
    this.props.requestCards(this.props.deckId);
  }

  render() {
    const cardKeys = Object.keys(this.props.cards);

    if (cardKeys.length !== 0) {
      return (
        <div className='wrapper'>
          <div className='card-index-container'>
            <button className='done-back-btn'>&larr;   Done</button>
            <div className='card-count'>
              { this.masteredCardCount(cardKeys) } Cards Mastered
            </div>
            <MasteryBarIndex cards={this.props.cards} />
          </div>

          <CardIndexItem cards={this.props.cards} updateMastery={this.props.updateMastery} />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default CardIndex;
