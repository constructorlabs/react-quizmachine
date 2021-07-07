import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../../styles/components/Login.scss';

function Login({
  username,
  password,
  userType,
  getUsername,
  getPassword,
  getLogin,
  getUserType,
  getCreateUser,
}) {
  const existingUserClasses = cx('login__existing', {
    'login__existing--hidden': userType === 'new',
  });
  const newUserClasses = cx('login__new', { 'login__new--hidden': userType === 'existing' });

  return (
    <div className="login">
      <div className="login__title">Who Knows?</div>
      <div className="login__subtitle">
        A trivia game that you will probably end up playing while in the bathroom.
      </div>
      <div className="login__box">
        <form className={existingUserClasses} onSubmit={getLogin}>
          <div className="login__header">Existing users</div>
          <div className="login__username">
            <input
              className="login__input"
              onChange={(event) => getUsername(event.target.value)}
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="login__password">
            <input
              className="login__input"
              onChange={(event) => getPassword(event.target.value)}
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
            <div>No Account?</div>
            <button type="button" className="login__button" onClick={() => getUserType('new')}>
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div className="login__box">
        <form className={newUserClasses} onSubmit={getCreateUser}>
          <div className="login__header">New user</div>
          <div className="login__username">
            <input
              className="login__input"
              onChange={(event) => getUsername(event.target.value)}
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="login__password">
            <input
              className="login__input"
              onChange={(event) => getPassword(event.target.value)}
              value={password}
              type="password"
              minLength="3"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login__button">
            Sign up
          </button>
          <div className="login__view-switch">
            <div>Already have an account?</div>
            <button type="button" className="login__button" onClick={() => getUserType('existing')}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  getUsername: PropTypes.func.isRequired,
  getPassword: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
  getUserType: PropTypes.func.isRequired,
  getCreateUser: PropTypes.func.isRequired,
};

export default Login;
