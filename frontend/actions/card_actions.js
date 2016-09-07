export const CardConstants = {
  REQUEST_CARDS: 'REQUEST_CARDS',
  RECEIVE_CARDS: 'RECEIVE_CARDS',
  UPDATE_MASTERY: 'UPDATE_MASTERY',
  RECEIVE_UPDATED_MASTERY: 'RECEIVE_UPDATED_MASTERY',
  DELETE_CARD: 'DELETE_CARD',
  RECEIVE_DELETED_CARD: 'RECEIVE_DELETED_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  RECEIVE_UPDATED_CARD: 'RECEIVE_UPDATED_CARD',
  CREATE_CARD: 'CREATE_CARD',
  RECEIVE_CREATED_CARD: 'RECEIVE_CREATED_CARD'
};

export const CardActions = {
  requestCards: () => ({
    type: CardConstants.REQUEST_CARDS
  }),

  receiveCards: cards => ({
    type: CardConstants.RECEIVE_CARDS,
    cards
  }),

  updateMastery: (id, mastery) => ({
    type: CardConstants.UPDATE_MASTERY,
    id: id,
    mastery: mastery,
  }),

  receiveUpdatedMastery: card => ({
    type: CardConstants.RECEIVE_UPDATED_MASTERY,
    card
  }),

  deleteCard: id => ({
    type: CardConstants.DELETE_CARD,
    id
  }),

  receiveDeletedCard: card => ({
    type: CardConstants.RECEIVE_DELETED_CARD,
    card
  }),

  updateCard: card => ({
    type: CardConstants.UPDATE_CARD,
    card
  }),

  receiveUpdatedCard: card => ({
    type: CardConstants.RECEIVE_UPDATED_CARD,
    card
  }),

  createCard: card => ({
    type: CardConstants.CREATE_CARD,
    card
  }),

  receiveCreatedCard: card => ({
    type: CardConstants.RECEIVE_CREATED_CARD,
    card
  })
};
