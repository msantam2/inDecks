const CardAPIUtil = {
  fetchCards: (success, error) => {
    $.ajax({
      type: 'GET',
      url: '/api/cards',
      success,
      error
    });
  }
};

export default CardAPIUtil;
