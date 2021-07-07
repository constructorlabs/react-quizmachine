import { connect } from 'react-redux';
import Login from '../components/Login';
import { setUsername, setPassword, loginUser, setUserType, createUser } from '../actions';

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password,
  userType: state.user.userType,
});

const mapDispatchToProps = dispatch => ({
  getUsername: username => dispatch(setUsername(username)),
  getPassword: password => dispatch(setPassword(password)),
  getLogin: event => {
    event.preventDefault();
    dispatch(loginUser());
  },
  getUserType: type => {
    dispatch(setUserType(type));
    dispatch(setUsername(''));
    dispatch(setPassword(''));
  },
  getCreateUser: event => {
    event.preventDefault();
    dispatch(createUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
