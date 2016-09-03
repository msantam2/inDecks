export const CardConstants = {
  REQUEST_CARDS: 'REQUEST_CARDS',
  RECEIVE_CARDS: 'RECEIVE_CARDS'
};

export const CardActions = {
  requestCards: () => ({
    type: CardConstants.REQUEST_CARDS
  }),

  receiveCards: (cards) => ({
    type: CardConstants.RECEIVE_CARDS,
    cards
  })
};
