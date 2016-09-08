import { SessionConstants, SessionActions } from '../actions/session_actions';
import SessionApiUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const success = (user) => {
    dispatch(SessionActions.receiveCurrentUser(user));
    hashHistory.push('/dashboard');
  };
  const error = (errs) => {
    dispatch(SessionActions.receiveErrors(errs));
  };

  switch (action.type) {
    case (SessionConstants.SIGNUP):
      SessionApiUtil.signup(action.user, success, error);
      return next(action);

    case (SessionConstants.LOGIN):
      SessionApiUtil.login(action.user, success, error);
      return next(action);

    case (SessionConstants.LOGOUT):
      const logoutSuccess = () => {
        dispatch(SessionActions.logout());
      };
      SessionApiUtil.logout(logoutSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
