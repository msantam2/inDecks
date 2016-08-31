export const SessionConstants = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const SessionActions = {
  signup: (user) => ({
    type: SessionConstants.SIGNUP,
    user
  }),

  login: (user) => ({
    type: SessionConstants.LOGIN,
    user
  }),

  logout: () => ({
    type: SessionConstants.LOGOUT
  }),

  receiveCurrentUser: (user) => ({
    type: SessionConstants.RECEIVE_CURRENT_USER,
    user
  }),

  receiveErrors: (errors) => ({
    type: SessionConstants.RECEIVE_ERRORS,
    errors
  })
};
