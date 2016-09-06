import React from 'react';
import CardFormRowItem from './card_form_row_item';
import merge from 'lodash/merge';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
    this.addRow = this.addRow.bind(this);
    this.state = {cards: {}};
  }

  componentDidMount () {
    this.props.requestCards();
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

  render() {
    let cardRows;

    if (Object.keys(this.state.cards).length > 0) {
      cardRows = Object.keys(this.state.cards).map((cardKey, idx) => (
          <CardFormRowItem key={`card-row-${cardKey}`} idx={idx} card={this.state.cards[cardKey]} deleteCard={this.deleteCard} />
      ));
    }

    return (
      <div className='card-form-container'>
        <button className='back-btn'>&larr;
                  Back</button>

        <h2 className='card-form-title'>TBD Flashcards</h2>
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
                <button className='save-cards-btn'>Save</button>
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    );
  }
}

export default CardForm;
