import response from '../../src/reducers/response';

describe('response', () => {
  const initialState = {};

  test('executes SET_RESPONSE action', () => {
    const action = {
      type: 'SET_RESPONSE',
      response: 'test',
    };
    const expectedState = 'test';
    const outputState = response(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
