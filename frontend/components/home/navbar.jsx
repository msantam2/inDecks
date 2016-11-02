import React from 'react';
import { hashHistory, Link } from 'react-router';

class NavBar extends React.Component { // ({currentUser, logout}) => {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(event) {
    event.preventDefault();
    let user = {email: 'KenJennings@gmail.com', password: 'password'};

    this.props.login({user});
  }

  render() {
    let greeting;
    let logo;

    if (this.props.currentUser) {
      greeting =
        [
          <li key='1'>
            <Link to='/dashboard' className='user-email-navbar'>
              {this.props.currentUser.email}
            </Link>
          </li>,
          <li key='2'>
            <Link to='/' className='session-btn logout-btn' onClick={this.props.logout}>
              Logout
            </Link>
          </li>
        ];

        logo = <Link to='/dashboard'><img className='logo-link' src='https://s14.postimg.org/a8s0augn5/92531cf5_3646_48c3_ad23_52241a979519.png' alt='logo'/></Link>;
    } else {
      greeting =
        [
          <li key='0'><button onClick={this.guestLogin} className='session-btn guest-login-btn'>Guest Login</button></li>,
          <li key='1'><Link to='/login' className='session-btn' activeClassName='current'>Login</Link></li>,
          <li key='2'><Link to='/signup' className='session-btn' activeClassName='current'>Sign Up</Link></li>
        ];

      logo = <img className='logo-link' src='https://s14.postimg.org/a8s0augn5/92531cf5_3646_48c3_ad23_52241a979519.png' alt='logo'/>;
    }

    return (
      <nav className='navbar'>
        {logo}

        <ul className='greeting'>
          {greeting}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
