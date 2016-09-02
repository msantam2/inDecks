import React from 'react';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from '../app';
import Splash from '../home/splash';
import SessionFormContainer from '../session_form/session_form_container';
import Dashboard from '../home/dashboard';
import CardIndexContainer from '../card/card_index_container';
import CardsFormContainer from '../card/card_form_container';

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
          <IndexRoute component={ Splash } />
          <Route path='/signup' component={ SessionFormContainer } />
          <Route path='/login' component={ SessionFormContainer } />

          <Route path='/dashboard' component={ Dashboard } />
        </Route>
      </Router>
    );
  }
}


export default AppRouter;
