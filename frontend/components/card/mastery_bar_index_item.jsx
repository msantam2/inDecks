import React from 'react';

const MasteryBarIndexItem = ({masteryLevel, cards}) => {
  const cardKeys = Object.keys(cards);
  const cardLength = cardKeys.length;
  let numCardsAtMasteryLevel = 0;

  cardKeys.forEach(cardKey => {
    if (cards[cardKey].mastery === masteryLevel) {
      numCardsAtMasteryLevel += 1;
    }
  });

  const widthPercentage = (numCardsAtMasteryLevel / cardLength) * 100;
  const widthStyle = {width: `${widthPercentage}%`};

  return (
    <li key='masteryLevel' className='mastery-bar-index-item'>
      <p className='mastery-level'>{masteryLevel}</p>
      <div style={widthStyle} className={`mastery-progress-bar-${masteryLevel} mastery-progress-bar`}></div>
    </li>
  );
};

export default MasteryBarIndexItem;
