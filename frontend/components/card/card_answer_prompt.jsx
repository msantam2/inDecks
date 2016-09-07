import React from 'react';

const CardAnswerPrompt = ({updateMastery}) => (
  <div className='card-answer-prompt'>
    <p className='how-well-know-answer'>How well did you know the answer?</p>
    <ul className='mastery-choices'>
      <li onClick={updateMastery} className='mastery-choice-1'>
        1&nbsp;&nbsp;Needs More Work
      </li>
      <li onClick={updateMastery} className='mastery-choice-2'>2</li>
      <li onClick={updateMastery} className='mastery-choice-3'>3</li>
      <li onClick={updateMastery} className='mastery-choice-4'>4</li>
      <li onClick={updateMastery} className='mastery-choice-5'>
        5&nbsp;&nbsp;Mastered
      </li>
    </ul>
  </div>
);

export default CardAnswerPrompt;
