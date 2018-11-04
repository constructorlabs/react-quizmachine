import { connect } from 'react-redux';
import Login from '../components/Login';
import { setUsername, setPassword, loginUser } from '../actions';

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password,
});

const mapDispatchToProps = dispatch => ({
  getUsername: username => dispatch(setUsername(username)),
  getPassword: password => dispatch(setPassword(password)),
  getLogin: event => {
    event.preventDefault();
    dispatch(loginUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
