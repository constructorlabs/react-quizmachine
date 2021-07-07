import stage from '../../src/reducers/stage';

describe('stage', () => {
  const initialState = 'login';

  test('executes SET_STAGE action', () => {
    const action = {
      type: 'SET_STAGE',
      stage: 'gameOver',
    };
    const expectedState = 'gameOver';
    const outputState = stage(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
