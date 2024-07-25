import getResponseFromAPI from '../0-promise.js';

test('getResponseFromAPI returns a promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});
