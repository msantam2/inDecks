import React from 'react';
import { Link, hashHistory } from 'react-router';
import { SessionActions } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/dashboard");
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to='/login'>log in</Link>;
    }
  }

  renderErrors() {
    return (
      <ul className='errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to inDecks!
          <br/>
          Please { this.props.formType } or { this.navLink() }
          { this.renderErrors() }
          <div className='login-form'>
            <br/>
            <label> Email:
              <input type='text' value={this.state.email}
                                 onChange={this.update('email')}
                                 className='login-input' />
            </label>

            <br />
            <label> Password:
              <input type='password' value={this.state.password}
                                     onChange={this.update('password')}
                                     className='login-input' />
            </label>

            <br />
            <input className='session-btn session-form-btn' type='submit' value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
