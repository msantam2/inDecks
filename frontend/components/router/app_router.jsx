import React from 'react';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from '../app';
import Splash from '../home/splash';
import SessionFormContainer from '../session_form/session_form_container';
import Dashboard from '../home/dashboard';
import DeckIndexContainer from '../deck/deck_index_container';
import DeckEditFormContainer from '../deck/deck_edit_form_container';
import CardIndexContainer from '../card/card_index_container';

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
      replace('/dashboard');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Splash } />
          <Route path='/signup' component={ SessionFormContainer } />
          <Route path='/login' component={ SessionFormContainer } />

          <Route path='/dashboard'>
            <IndexRoute component={ DeckIndexContainer } />
          </Route>

          <Route path='/decks/:deckId' component={ DeckEditFormContainer }>
            <Route path='cards' component={ CardIndexContainer } />
          </Route>

        </Route>
      </Router>
    );
  }
}


export default AppRouter;
