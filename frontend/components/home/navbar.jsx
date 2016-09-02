import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentUser, logout}) => {
  let greeting;

  if (currentUser) {
    greeting =
      [
        <li key='1'>{currentUser.email}</li>,
        <li key='2'><button className='logout-btn' onClick={logout}>Logout</button></li>
      ];
  } else {
    greeting =
      [
        <li key='1'><Link to='/login' className='login-link' activeClassName='current'>Login</Link></li>,
        <li key='2'><Link to='/signup' className='sign-up-link' activeClassName='current'>Sign Up</Link></li>
      ];
  }

  return (
    <nav className='navbar'>
      <p className='logo'>inDecks</p>
      <ul className='greeting'>
        {greeting}
      </ul>
    </nav>
  );
};

export default NavBar;
