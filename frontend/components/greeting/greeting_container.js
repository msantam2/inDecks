import Greeting from './greeting';
import { SessionActions } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
