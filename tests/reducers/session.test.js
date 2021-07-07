import session from '../../src/reducers/session';

describe('session', () => {
  const initialState = {
    difficulty: 'easy',
    triviaType: 'any',
    category: 'any',
    score: 0,
    progress: 0,
    lives: 3,
  };

  test('executes SET_DIFFICULTY action', () => {
    const action = {
      type: 'SET_DIFFICULTY',
      difficulty: 'medium',
    };
    const expectedState = {
      difficulty: 'medium',
      triviaType: 'any',
      category: 'any',
      score: 0,
      progress: 0,
      lives: 3,
    };
    const outputState = session(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes INCREMENT_LIVES action', () => {
    const action = {
      type: 'INCREMENT_LIVES',
    };
    const expectedState = {
      difficulty: 'easy',
      triviaType: 'any',
      category: 'any',
      score: 0,
      progress: 0,
      lives: 4,
    };
    const outputState = session(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes ADD_TO_SCORE action', () => {
    const action = {
      type: 'ADD_TO_SCORE',
      score: 300,
    };
    const expectedState = {
      difficulty: 'easy',
      triviaType: 'any',
      category: 'any',
      score: 300,
      progress: 0,
      lives: 3,
    };
    const outputState = session(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
