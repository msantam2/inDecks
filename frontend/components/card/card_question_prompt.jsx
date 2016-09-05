import React from 'react';

const CardQuestionPrompt = ({flipCard}) => (
  <div className='prompt'>
    <a onClick={flipCard} className='reveal'>
      Reveal Answer
    </a>
  </div>
);

export default CardQuestionPrompt;
