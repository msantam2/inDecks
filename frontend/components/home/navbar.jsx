import React from 'react';
import { Link } from 'react-router';

const NavBar = ({currentUser, logout}) => {
  let greeting;

  if (currentUser) {
    greeting =
      [
        <li key='1' className='user-email-navbar'>{currentUser.email}</li>,
        <li key='2'><Link to='/' className='session-btn logout-btn' onClick={logout}>Logout</Link></li>
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
      <Link to='/'><img className='logo-link' src='https://s14.postimg.org/a8s0augn5/92531cf5_3646_48c3_ad23_52241a979519.png' alt='logo'/></Link>

      <ul className='greeting'>
        {greeting}
      </ul>
    </nav>
  );
};

export default NavBar;
