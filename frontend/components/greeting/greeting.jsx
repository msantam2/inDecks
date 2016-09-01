import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className='splash'>
    <div className='index-card'>
      <img src='https://s16.postimg.org/rc6v4irqt/index_cards.png' border='0' alt='index-cards' className='index-cards-img'/>
    </div>

    <div className='signup-login'>
      <button className='sign-up-btn'><Link to='/signup' className='sign-up-link' activeClassName='current'>Sign Up</Link></button>

      <button className='login-btn'><Link to='/login' className='login-link' activeClassName='current'>Login</Link></button>
    </div>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className='header-group'>
		<h2 className='header-name'>Hi, {currentUser.email}!</h2>
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
