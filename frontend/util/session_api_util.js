export const signup = (user, success, error) => {
  // ajax request
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  // ajax request
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: user, 
    success,
    error
  });
};

export const logout = (success, error) => {
  // ajax request
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
    success,
    error
  });
};
