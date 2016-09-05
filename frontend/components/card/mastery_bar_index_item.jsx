import React from 'react';

const MasteryBarIndexItem = ({masteryLevel, cards}) => {
  const cardKeys = Object.keys(cards);

  return (
    <li key={`mastery-level-${masteryLevel}`} className='mastery-bar-index-item'>
      <p className='mastery-level'>{masteryLevel}</p>
      <div className={`mastery-progress-bar-${masteryLevel} mastery-progress-bar`}></div>
    </li>
  );
};

export default MasteryBarIndexItem;
