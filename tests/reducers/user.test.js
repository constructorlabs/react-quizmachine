import user from '../../src/reducers/user';

describe('user', () => {
  const initialState = {
    username: '',
    password: '',
    loggedIn: false,
    userType: 'existing',
    id: '',
  };

  test('executes SET_USERNAME action', () => {
    const action = {
      type: 'SET_USERNAME',
      username: 'Yetkin',
    };
    const expectedState = {
      username: 'Yetkin',
      password: '',
      loggedIn: false,
      userType: 'existing',
      id: '',
    };
    const outputState = user(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('executes SET_PASSWORD action', () => {
    const action = {
      type: 'SET_PASSWORD',
      password: 'secret',
    };
    const expectedState = {
      username: '',
      password: 'secret',
      loggedIn: false,
      userType: 'existing',
      id: '',
    };
    const outputState = user(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
