import React from 'react';

const CardAnswerPrompt = ({updateMastery}) => (
  <div>
    <p>How well did you know the answer?</p>
    <ul className='mastery-choices'>
      <li onClick={updateMastery} className='mastery-choice-1'>
        1 Needs More Work
      </li>
      <li onClick={updateMastery} className='mastery-choice-2'>2</li>
      <li onClick={updateMastery} className='mastery-choice-3'>3</li>
      <li onClick={updateMastery} className='mastery-choice-4'>4</li>
      <li onClick={updateMastery} className='mastery-choice-5'>
        5 Mastered!
      </li>
    </ul>
  </div>
);

export default CardAnswerPrompt;
