const DeckAPIUtil = {
  fetchDecks: (success, error) => {
    $.ajax({
      type: 'GET',
      url: '/api/decks',
      success,
      error
    });
  },
};

export default DeckAPIUtil;
