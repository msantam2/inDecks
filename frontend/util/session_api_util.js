const SessionApiUtil = {
  signup: (user, success, error) => {
    // ajax request
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: user,
      success,
      error
    });
  },

  login: (user, success, error) => {
    // ajax request
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: user,
      success,
      error
    });
  },

  logout: (success, error) => {
    // ajax request
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success,
      error
    });
  }
};

export default SessionApiUtil; 
