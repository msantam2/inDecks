import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentUser, logout}) => {
  let greeting;

  if (currentUser) {
    greeting =
      [
        <li key='1' className='user-email-navbar'>{currentUser.email}</li>,
        <li key='2'><button className='session-btn logout-btn' onClick={logout}>Logout</button></li>
      ];
  } else {
    greeting =
      [
        <li key='1'><Link to='/login' className='session-btn' activeClassName='current'>Login</Link></li>,
        <li key='2'><Link to='/signup' className='session-btn' activeClassName='current'>Sign Up</Link></li>
      ];
  }

  return (
    <nav className='navbar'>
      <p className='logo-text'><Link to='/' className='logo-link'>inDecks</Link></p>

      <ul className='greeting'>
        {greeting}
      </ul>
    </nav>
  );
};

export default NavBar;
