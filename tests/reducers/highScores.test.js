import highScores from '../../src/reducers/highScores';

describe('high scores', () => {
  const initialState = [];

  test('executes SET_HIGH_SCORES action', () => {
    const action = {
      type: 'SET_HIGH_SCORES',
      table: ['Yetkin', 1000],
    };
    const expectedState = ['Yetkin', 1000];
    const outputState = highScores(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
