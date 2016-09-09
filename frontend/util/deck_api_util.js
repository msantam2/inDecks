const DeckAPIUtil = {
  fetchDecks: (success, error) => {
    $.ajax({
      type: 'GET',
      url: '/api/decks',
      success,
      error
    });
  },

  deleteDeck: (deckId, success, error) => {
    $.ajax({
      type: 'DELETE',
      url: `/api/decks/${deckId}`,
      success,
      error
    });
  },

  createDeck: (deck, success, error) => {
    $.ajax({
      type: 'POST',
      url: '/api/decks',
      data: {deck},
      success,
      error
    }); 
  }
};

export default DeckAPIUtil;
