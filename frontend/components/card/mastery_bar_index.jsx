import React from 'react';
import MasteryBarIndexItem from './mastery_bar_index_item';

const MasteryBarIndex = ({cards}) => {

  let masteryBarIndexItems = [1, 2, 3, 4, 5].map(masteryLevel => (
    <MasteryBarIndexItem masteryLevel={masteryLevel} cards={cards} key={`mastery-bar-index-item-${masteryLevel}`} />
  ));

  return (
    <ul className='mastery-bar-index'>
      {masteryBarIndexItems}
    </ul>
  );
};

export default MasteryBarIndex;
