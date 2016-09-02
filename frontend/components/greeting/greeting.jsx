import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className='splash'>
    <nav className='splash-nav'>
      <h2 className='logo'>inDecks</h2>

      <button className='login-btn'><Link to='/login' className='login-link' activeClassName='current'>Login</Link></button>

      <button className='sign-up-btn'><Link to='/signup' className='sign-up-link' activeClassName='current'>Sign Up</Link></button>
    </nav>

    <div className='index-card'>
      <img src='https://s16.postimg.org/rc6v4irqt/index_cards.png' alt='index-cards' className='index-cards-img'/>
    </div>

    <div className='signup-login'>

    </div>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className='header-group'>
		<h2 className='header-name'>Welcome! {currentUser.email}</h2>
		<button className='header-button' onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
};

export default Greeting;
