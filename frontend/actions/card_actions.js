export const CardConstants = {
  REQUEST_CARDS: 'REQUEST_CARDS',
  RECEIVE_CARDS: 'RECEIVE_CARDS',
  UPDATE_MASTERY: 'UPDATE_MASTERY',
  RECEIVE_UPDATED_MASTERY: 'RECEIVE_UPDATED_MASTERY',
  CREATE_CARD: 'CREATE_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  DELETE_CARD: 'DELETE_CARD',
  RECEIVE_DELETED_CARD: 'RECEIVE_DELETED_CARD'
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
  }),

  createCard: () => ({
    type: CardConstants.CREATE_CARD
  }),

  updateCard: (card) => ({
    type: CardConstants.UPDATE_CARD,
    card
  }),

  deleteCard: (id) => ({
    type: CardConstants.DELETE_CARD,
    id
  }),

  receiveDeletedCard: (card) => ({
    type: CardConstants.RECEIVE_DELETED_CARD,
    card
  })
};
