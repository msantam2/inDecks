const CardAPIUtil = {
  fetchCards: (success, error) => {
    $.ajax({
      type: 'GET',
      url: '/api/cards',
      success,
      error
    });
  },

  updateMastery: (id, mastery, success, error) => {
    $.ajax({
      type: 'PATCH',
      url: `/api/cards/${id}`,
      data: {card: {id: id, mastery: mastery}},
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
  }
};

export default CardAPIUtil;
