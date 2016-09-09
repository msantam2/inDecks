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
  }
};

export default DeckAPIUtil;
