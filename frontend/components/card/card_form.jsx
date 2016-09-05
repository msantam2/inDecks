import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <tr>
              <td>test1</td>
              <td>test2</td>
              <td>test3</td>
              <td>X (delete)</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <p className='add-a-card-link'><span className='new-card-plus-sign'>+</span> Add a Card</p>
              </td>
            </tr>
          </tfoot>
        </table>

        <button className='save-cards-btn'>Save</button>
      </div>
    );
  }
}

export default CardForm;
