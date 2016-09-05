import React from 'react';

const CardAnswer = ({cardContent}) => (
  <div className='back'>
    <p className='flashcard-side'>A.</p>
    <p className='flashcard-content'>{cardContent}</p>
  </div>
);

export default CardAnswer;
