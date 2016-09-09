import React from 'react';
import { hashHistory } from 'react-router';

class DeckIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.studyDeck = this.studyDeck.bind(this);
    this.editDeck = this.editDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
  }

  studyDeck(deckId) {
    hashHistory.push(`/decks/${deckId}/cards`);
  }

  editDeck(deckId) {
    hashHistory.push(`/decks/${deckId}`);
  }

  deleteDeck(deckId) {
    this.props.deleteDeck(deckId); 
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
        <button className='study-btn' onClick={this.studyDeck.bind(null, this.props.deck.id)}>Study</button>
        <button className='edit-btn' onClick={this.editDeck.bind(null, this.props.deck.id)}>Edit</button>
        <button className='delete-btn' onClick={this.deleteDeck.bind(null, this.props.deck.id)}>Delete</button>
      </li>
    );
  }
}

export default DeckIndexItem;
