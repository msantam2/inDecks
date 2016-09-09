export const DeckConstants = {
  REQUEST_DECKS: 'REQUEST_DECKS',
  RECEIVE_DECKS: 'RECEIVE_DECKS',
  CREATE_DECK: 'CREATE_DECK',
  RECEIVE_CREATED_DECK: 'RECEIVE_CREATED_DECK',
  DELETE_DECK: 'DELETE_DECK',
  RECEIVE_DELETED_DECK: 'RECEIVE_DELETED_DECK'
};

export const DeckActions = {
  requestDecks: () => ({
    type: DeckConstants.REQUEST_DECKS
  }),

  receiveDecks: decks => ({
    type: DeckConstants.RECEIVE_DECKS,
    decks
  }),

  createDeck: deck => ({
    type: DeckConstants.CREATE_DECK,
    deck
  }),

  receiveCreatedDeck: deck => ({
    type: DeckConstants.RECEIVE_CREATED_DECK,
    deck
  }),

  deleteDeck: deckId => ({
    type: DeckConstants.DELETE_DECK,
    deckId
  }),

  receiveDeletedDeck: deck => ({
    type: DeckConstants.RECEIVE_DELETED_DECK,
    deck
  })
};
