import React from 'react';

const CardAnswerPrompt = ({updateMastery}) => (
  <div>
    <p>How well did you know the answer?</p>
    <ul className='mastery-choices'>
      <li onClick={updateMastery} className='needs-more-work-choice'>
        1 Needs More Work
      </li>
      <li onClick={updateMastery}>2</li>
      <li onClick={updateMastery}>3</li>
      <li onClick={updateMastery}>4</li>
      <li onClick={updateMastery} className='mastered-choice'>
        5 Mastered!
      </li>
    </ul>
  </div>
);

export default CardAnswerPrompt;
