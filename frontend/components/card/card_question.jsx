import React from 'react';

const CardQuestion = ({cardContent}) => (
  <div className='front'>
    <p className='flashcard-side'>Q.</p>
    <p className='flashcard-content'>{cardContent}</p>
  </div>
);

export default CardQuestion;
