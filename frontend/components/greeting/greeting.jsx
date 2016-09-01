import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className='splash'>
    <div className='background-img'></div>
    <div className='signup-login'>
      <button className='sign-up-btn'><Link to='/signup' className='sign-up-link' activeClassName='current'>Sign Up</Link></button>

      <button className='login-btn'><Link to='/login' className='login-link' activeClassName='current'>Login</Link></button>
    </div>

    <div className='index-card-container'>
      <div class='index-card'>
        <img className='index-card-img' src='https://upload.wikimedia.org/wikipedia/commons/2/2e/Notecard.jpg' alt='index card'/ >

        <p className='tagline'>inDecks: A more <span className='underline'>fun</span> and <span className='underline'>efficient</span> way to study.</p>
      </div>
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
