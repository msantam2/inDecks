import React from 'react';

class DeckIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='deck-list-item' key={`deck-${this.props.deck.id}`}>
        <h3 className='deck-title'>
          { this.props.deck.title }
        </h3>
        <p className='deck-description'>
          { this.props.deck.description }
        </p>
        <button className='study-btn'>Study</button>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn'>Delete</button>
      </li>
    );
  }
}

export default DeckIndexItem;
