import allCategories from '../../src/reducers/allCategories';

describe('all categories', () => {
  const initialState = {};

  test('executes SET_ALL_CATEGORIES action', () => {
    const action = {
      type: 'SET_ALL_CATEGORIES',
      allCategories: 'allCategories',
    };
    const expectedState = 'allCategories';
    const outputState = allCategories(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
