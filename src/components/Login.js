import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Login.scss';

function Login({ username, password, getUsername, getPassword, getLogin }) {
  return (
    <div className="login">
      <div className="login__box">
        <form className="login__existing" onSubmit={getLogin}>
          <div className="login__username">
            <input
              className="login__input"
              onChange={event => getUsername(event.target.value)}
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="login__password">
            <input
              className="login__input"
              onChange={event => getPassword(event.target.value)}
              value={password}
              type="password"
              minLength="3"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login__button">
            Log in
          </button>
          <div className="login__view-switch">
            <p>No Account?</p>
            <div className="login__switch">Sign up</div>
          </div>
        </form>
      </div>

      <div className="login__box">
        <form className="login__new">
          <div className="login__username">
            <input className="login__input" placeholder="Username" />
          </div>
          <div className="login__password">
            <input className="login__input" type="password" minLength="3" placeholder="Password" />
          </div>
          <button type="submit" className="login__button">
            Create user
          </button>
          <div className="login__view-switch">
            <p>Already have an account?</p>
            <div className="login__switch">Sign in</div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  getUsername: PropTypes.func.isRequired,
  getPassword: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
};

export default Login;
