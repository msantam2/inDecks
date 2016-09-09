const CardAPIUtil = {
  fetchCards: (deckId, success, error) => {
    $.ajax({
      type: 'GET',
      url: '/api/cards',
      data: {deckId},
      success,
      error
    });
  },

  updateMastery: (card, success, error) => {
    $.ajax({
      type: 'PATCH',
      url: `/api/cards/${card.id}`,
      data: {card},
      success,
      error
    });
  },

  deleteCard: (id, success, error) => {
    $.ajax({
      type: 'DELETE',
      url: `/api/cards/${id}`,
      success,
      error
    });
  },

  updateCard: (card, success, error) => {
    $.ajax({
      type: 'PATCH',
      url: `/api/cards/${card.id}`,
      data: {card},
      success,
      error
    });
  },

  createCard: (card, success, error) => {
    $.ajax({
      type: 'POST',
      url: '/api/cards',
      data: {card},
      success,
      error
    });
  }
};

export default CardAPIUtil;
