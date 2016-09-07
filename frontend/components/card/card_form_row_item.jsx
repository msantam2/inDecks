import React from 'react';

const CardFormRowItem = ({card, cardNum, deleteCard, updateQuestion, updateAnswer}) => {

  return (
    <tr key={card.id}>
      <td className='card-number-column'>
        {cardNum}
      </td>

      <td>
        <input onChange={updateQuestion.bind(null, card)} className='card-edit-question' value={card.question} />
      </td>

      <td>
        <input onChange={updateAnswer.bind(null, card)} className='card-edit-answer' value={card.answer} />
      </td>
      
      <td>
        <a onClick={deleteCard.bind(null, card.id)} className='card-delete-btn'>&#10006;</a>
      </td>
    </tr>
  );
};

export default CardFormRowItem;
