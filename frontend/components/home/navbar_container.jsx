import NavBar from './navbar';
import { SessionActions } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  login: user => dispatch(SessionActions.login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
