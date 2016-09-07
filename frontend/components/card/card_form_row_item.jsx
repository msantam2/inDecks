import React from 'react';

const CardFormRowItem = ({card, idx, deleteCard, updateQuestion, updateAnswer}) => {


  return (
    <tr key={card.id}>
      <td className='card-number-column'>{idx + 1}</td>
      <td><input onChange={updateQuestion.bind(null, card.id)} className='card-edit-question' value={card.question} /></td>
      <td><input onChange={updateAnswer.bind(null, card.id)} className='card-edit-answer' value={card.answer} /></td>
      <td>
        <a onClick={deleteCard.bind(null, card.id)} className='card-delete-btn'>&#10006;</a>
      </td>
    </tr>
  );
};

export default CardFormRowItem;
