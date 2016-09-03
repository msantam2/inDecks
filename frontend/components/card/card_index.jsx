import React from 'react';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
  componentDidMount () {
    this.props.requestCards();
  }

  render() {
    return (
      <div className='card-index-container'>
        <div className='card-count'>
          { this.props.cards.length } 
        </div>
      </div>
    );
  }
}

export default CardIndex;
