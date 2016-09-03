import React from 'react';
import CardIndexItem from './card_index_item';

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
    debugger
    return `${numMastered} / ${cardsLength}`;
  }

  componentDidMount () {
    debugger
    this.props.requestCards();
  }

  render() {
    const cardKeys = Object.keys(this.props.cards);
    debugger
    return (
      <div className='card-index-container'>
        <button className='done-back-btn'>&larr;   Done</button>
        <div className='card-count'>
          { this.masteredCardCount(cardKeys) } Cards Mastered
        </div>
      </div>
    );
  }
}

export default CardIndex;

class BenchIndex extends React.Component {
  componentDidMount () {
    this.props.requestBenches();
  }

  render() {
    const benchKeys = Object.keys(this.props.benches);

    return (
      <ul className="FIND-ME!">
        {
          benchKeys.map(benchKey => (
            <BenchIndexItem key={benchKey} bench={this.props.benches[benchKey]} />
          ))
        }
      </ul>
    );
  }
}
