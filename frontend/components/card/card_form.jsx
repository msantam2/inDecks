import React from 'react';
import CardFormRowItem from './card_form_row_item';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount () {
    this.props.requestCards();
  }

  deleteCard(id) {
    this.props.deleteCard(id);
  }

  render() {
    let cardRows;

    if (Object.keys(this.props.cards).length > 0) {
      cardRows = Object.keys(this.props.cards).map((cardKey, idx) => (
          <CardFormRowItem key={`card-row-${cardKey}`} idx={idx} card={this.props.cards[cardKey]} deleteCard={this.deleteCard} />
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
                <a className='add-card-plus-sign-link'>+</a>
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
