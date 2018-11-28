import trivia from '../../src/reducers/trivia';

describe('trivia', () => {
  const initialState = {};

  test('executes SET_TRIVIA action', () => {
    const action = {
      type: 'SET_TRIVIA',
      trivia: 'trivia',
    };
    const expectedState = 'trivia';
    const outputState = trivia(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('executes RESET_TRIVIA action', () => {
    const action = {
      type: 'RESET_TRIVIA',
    };
    const expectedState = {};
    const outputState = trivia(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
