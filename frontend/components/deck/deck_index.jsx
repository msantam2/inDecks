import React from 'react';
import DeckIndexItem from './deck_index_item';
import { hashHistory, Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import DeckForm from './deck_form';

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};
    this._handleClick = this._handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  _handleClick() {
    this.setState({
      modalOpen: true
    });
  }

  onModalClose() {
    this.setState({
      modalOpen: false
    });
    ModalStyle.content.opacity = 0;
  }

  onModalOpen() {
    ModalStyle.content.opacity = 100;
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
          <button className='create-deck-btn'         onClick={this._handleClick}>Create Deck</button>
        </nav>
        <div className='decks-container'>
          <h1 className='decks-header'>Your Decks</h1>
          <ul className='decks-list'>
            { decks }
          </ul>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>

          <button onClick={this.onModalClose} className='deck-form-close-btn'>&#10006;</button>
          <DeckForm onModalClose={this.onModalClose} currentUser={this.props.currentUser} createDeck={this.props.createDeck}/>
        </Modal>
      </div>
    );
  }
}

export default DeckIndex;
