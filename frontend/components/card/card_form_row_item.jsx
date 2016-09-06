import React from 'react';

const CardFormRowItem = ({card}) => {
  return (
    <tr key={card.id}>
      <td className='card-number-column'>{card.id}</td>
      <td><input className='card-edit-question' value={card.question} /></td>
      <td><input className='card-edit-answer' value={card.answer} /> </td>
      <td>
        <a className='card-delete-btn'>&#10006;</a>
      </td>
    </tr>
  );
};

export default CardFormRowItem;
