import {
  setDifficulty,
  setStage,
  addToScore,
  incrementLives,
  decrementLives,
  incrementProgress,
  resetProgress,
  setResponse,
  setCorrectGif,
  setIncorrectGif,
  setSessionId,
  resetSession,
  setHighScores,
} from '../../src/actions';

describe('actions', () => {
  test('setDifficulty returns expected action', () => {
    const action = setDifficulty('easy');
    const expectedAction = {
      type: 'SET_DIFFICULTY',
      difficulty: 'easy',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setStage returns expected action', () => {
    const action = setStage('newGame');
    const expectedAction = {
      type: 'SET_STAGE',
      stage: 'newGame',
    };
    expect(action).toEqual(expectedAction);
  });
  test('addToScore returns expected action', () => {
    const action = addToScore(100);
    const expectedAction = {
      type: 'ADD_TO_SCORE',
      score: 100,
    };
    expect(action).toEqual(expectedAction);
  });
  test('incrementLives returns expected action', () => {
    const action = incrementLives();
    const expectedAction = {
      type: 'INCREMENT_LIVES',
    };
    expect(action).toEqual(expectedAction);
  });
  test('decrementLives returns expected action', () => {
    const action = decrementLives();
    const expectedAction = {
      type: 'DECREMENT_LIVES',
    };
    expect(action).toEqual(expectedAction);
  });
  test('incrementProgress returns expected action', () => {
    const action = incrementProgress();
    const expectedAction = {
      type: 'INCREMENT_PROGRESS',
    };
    expect(action).toEqual(expectedAction);
  });
  test('resetProgress returns expected action', () => {
    const action = resetProgress();
    const expectedAction = {
      type: 'RESET_PROGRESS',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setResponse returns expected action', () => {
    const action = setResponse('test');
    const expectedAction = {
      type: 'SET_RESPONSE',
      response: 'test',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setCorrectGif returns expected action', () => {
    const action = setCorrectGif('testURL');
    const expectedAction = {
      type: 'SET_CORRECT_GIF',
      correctGif: 'testURL',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setIncorrectGif returns expected action', () => {
    const action = setIncorrectGif('testURL');
    const expectedAction = {
      type: 'SET_INCORRECT_GIF',
      incorrectGif: 'testURL',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setSessionId returns expected action', () => {
    const action = setSessionId(5);
    const expectedAction = {
      type: 'SET_SESSION_ID',
      id: 5,
    };
    expect(action).toEqual(expectedAction);
  });
  test('resetSession returns expected action', () => {
    const action = resetSession();
    const expectedAction = {
      type: 'RESET_SESSION',
    };
    expect(action).toEqual(expectedAction);
  });
  test('setHighScores returns expected action', () => {
    const action = setHighScores(['Yetkin', 100]);
    const expectedAction = {
      type: 'SET_HIGH_SCORES',
      table: ['Yetkin', 100],
    };
    expect(action).toEqual(expectedAction);
  });
});
