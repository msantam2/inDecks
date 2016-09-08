import React from 'react';
import DeckIndexItem from './deck_index_item';

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  render() {
    let deckKeys = Object.keys(this.props.decks);
    let decks = deckKeys.map(deckKey => (
      <DeckIndexItem key={`deck-item-${deckKey}`} deck={this.props.decks[parseInt(deckKey)]} deleteDeck={this.props.deleteDeck} />
    ));
    let deckCount = Object.keys(this.props.decks).length;

    return (
      <div>
        <nav className='decks-nav'>
          <div className='deck-count'>{ deckCount } Decks</div>
          <button className='create-deck-btn'>Create Deck</button>
        </nav>
        <div className='decks-container'>
          <h1 className='decks-header'>Your Decks</h1>
          <ul className='decks-list'>
            { decks }
          </ul>
        </div>
      </div>
    );
  }
}

export default DeckIndex;
