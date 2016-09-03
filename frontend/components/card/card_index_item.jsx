import React from 'react';

const CardIndexItem = ({card}) => (
  <li key={card.question}>{card.question}? {card.answer}</li>
);

export default CardIndexItem;
