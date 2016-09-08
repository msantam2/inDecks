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
      <DeckIndexItem key={`deck-item-${deckKey}`} deck={this.props.decks[parseInt(deckKey)]} createDeck={this.props.createDeck} deleteDeck={this.props.deleteDeck} />
    ));

    return (
      <div>
        { decks }
      </div>
    );
  }
}

export default DeckIndex;
