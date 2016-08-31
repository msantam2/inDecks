import { SessionConstants, SessionActions } from '../actions/session_actions';
import SessionApiUtil from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = (user) => {
    dispatch(SessionActions.receiveCurrentUser(user));
  };
  const errorCallback = (errs) => {
    dispatch(SessionActions.receiveErrors(errs));
  };

  switch (action.type) {
    case (SessionConstants.SIGNUP):
      SessionApiUtil.signup(action.user, successCallback, errorCallback);
      return next(action);
    case (SessionConstants.LOGIN):
      SessionApiUtil.login(action.user, successCallback, errorCallback);
      return next(action);
    case (SessionConstants.LOGOUT):
      SessionApiUtil.logout(() => next(action));
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
