export const CardConstants = {
  REQUEST_CARDS: 'REQUEST_CARDS',
  RECEIVE_CARDS: 'RECEIVE_CARDS',
  UPDATE_MASTERY: 'UPDATE_MASTERY',
  RECEIVE_UPDATED_MASTERY: 'RECEIVE_UPDATED_MASTERY'
};

export const CardActions = {
  requestCards: () => ({
    type: CardConstants.REQUEST_CARDS
  }),

  receiveCards: (cards) => ({
    type: CardConstants.RECEIVE_CARDS,
    cards
  }),

  updateMastery: (id, mastery) => ({
    type: CardConstants.UPDATE_MASTERY,
    id: id,
    mastery: mastery,
  }),

  receiveUpdatedMastery: (card) => ({
    type: CardConstants.RECEIVE_UPDATED_MASTERY,
    card
  })
};
