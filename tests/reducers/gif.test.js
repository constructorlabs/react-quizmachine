import gif from '../../src/reducers/gif';

describe('gif', () => {
  const initialState = {};

  test('executes SET_CORRECT_GIF action', () => {
    const action = {
      type: 'SET_CORRECT_GIF',
      correctGif: 'testURL',
    };
    const expectedState = { correctGif: 'testURL' };
    const outputState = gif(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
