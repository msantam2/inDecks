import React from 'react';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.masteredCardCount = this.masteredCardCount.bind(this);
  }


  masteredCardCount(cardKeys) {
    let numMastered = 0;
    let cardLength = cardKeys.length;

    cardKeys.map(cardKey => {
      if (this.props.cards[cardKey].mastered) {
        numMastered += 1;
      }
    });

    return `${numMastered} / ${cardLength}`;
  }

  componentDidMount () {
    this.props.requestCards();
  }

  render() {
    const cardKeys = Object.keys(this.props.cards);

    return (
      <div className='card-index-container'>
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
