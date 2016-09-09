import React from 'react';
import DeckEditFormRowItem from './deck_edit_form_row_item';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

class DeckEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: {}};

    this.deleteCard = this.deleteCard.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.addRow = this.addRow.bind(this);
    this.save = this.save.bind(this);
    this.backToDashBoard = this.backToDashBoard.bind(this);
  }

  componentDidMount () {
    this.props.requestCards(this.props.deckId);
  }

  componentWillReceiveProps (newProps) {
    if (Object.keys(newProps.cards).length > 0) {
      this.setState({
        cards: newProps.cards
      });
    }
  }

  deleteCard(id) {
    let idString = id.toString();

    if (Object.keys(this.props.cards).includes(idString)) {
      this.props.deleteCard(id);
    } else {
      delete this.state.cards[id];
      let newCards = this.state.cards;
      this.setState({
        cards: newCards
      });
    }
  }

  backToDashBoard() {
    hashHistory.push('/dashboard');
  }

  addRow() {
    let newCard = {
      id: Math.random(),
      question: '',
      answer: ''
    };

    let newCards = merge({}, this.state.cards);
    newCards[newCard.id] = newCard;

    this.setState({
      cards: newCards
    });
  }

  updateQuestion(card, event) {
    let newCards = merge({}, this.state.cards);

    let question = event.target.value;
    newCards[card.id].question = question;
    this.setState({
      cards: newCards
    });
  }

  updateAnswer(card, event) {
    let newCards = merge({}, this.state.cards);

    let answer = event.target.value;
    newCards[card.id].answer = answer;

    this.setState({
      cards: newCards
    });
  }

  save() {
    let cardKeys = Object.keys(this.state.cards);

    cardKeys.forEach(cardKey => {
      let currentCard = this.state.cards[cardKey];


      if (currentCard.question === '' && currentCard.answer === '') {
        this.props.deleteCard(currentCard.id);
      } else if (currentCard.question === '' || currentCard.answer === '') {
        return;
      } else { // able to be saved bc card has both Q and A!
        // if card in props = card IS in db. update this existing card in db
        if (Object.keys(this.props.cards).includes(currentCard.id.toString())) {
          this.props.updateCard(currentCard);
        // not in props (only state) = card NOT yet in db. create new card to db
        } else {
          // need to bind the deckId to the currentCard in order to
          // persist it to the database!
          let createdCard = Object.assign({}, currentCard);
          createdCard['deck_id'] = parseInt(this.props.deckId);
          this.props.createCard(createdCard);
        }
      }
    }, this);

    hashHistory.push(`/dashboard`); // later push back to decks index
  }

  render() {
    let cardRows;

    if (Object.keys(this.state.cards).length > 0) {
      cardRows = Object.keys(this.state.cards).map((cardKey, idx) => (
          <DeckEditFormRowItem key={`card-row-${cardKey}`} cardNum={idx + 1} card={this.state.cards[cardKey]} deleteCard={this.deleteCard} updateQuestion={this.updateQuestion} updateAnswer={this.updateAnswer} />
      ));
    }

    // setting the title to the deck title. Object.keys guards against
    // initial render when this.props.decks is not yet populated
    let cardFormTitle;
    if (Object.keys(this.props.decks).length > 0) {
      cardFormTitle = `${this.props.decks[parseInt(this.props.deckId)].title} Flashcards`;
    }

    return (
      <div className='card-form-container'>
        <button className='back-btn' onClick={this.backToDashBoard}>&larr;
                  Back</button>

                <h2 className='card-form-title'>{ cardFormTitle }</h2>
        <table className='card-edit-form'>
          <thead>
            <tr className='header-row'>
              <th>Card #</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>

          <tbody>
            { cardRows }
          </tbody>

          <tfoot>
            <tr>
              <td>
                <a className='add-card-plus-sign-link' onClick={this.addRow}>+</a>
              </td>
              <td className='card-edit-question'></td>
              <td className='card-edit-answer'></td>
              <td>
                <button onClick={this.save} className='save-cards-btn'>Save</button>
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    );
  }
}

export default DeckEditForm;
