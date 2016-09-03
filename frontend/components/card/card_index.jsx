import React from 'react';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
  componentDidMount () {
    this.props.requestCards();
  }

  render() {
    const cardKeys = Object.keys(this.props.cards);
    return (
      <ul className='find-me'>
        {
          cardKeys.map(cardKey => (
            <CardIndexItem key={cardKey} card={this.props.cards[cardKey]} />
          ))
        }
      </ul>
    );
  }
}

export default CardIndex;
