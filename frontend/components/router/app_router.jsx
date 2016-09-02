import React from 'react';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from '../app';
import Home from '../home/home';
import SessionFormContainer from '../session_form/session_form_container';


class AppRouter extends React.Component {
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home } />
          <Route path='/signup' component={ SessionFormContainer } />
          <Route path='/login' component={ SessionFormContainer } />
        </Route>
      </Router>
    );
  }
}


export default AppRouter;
