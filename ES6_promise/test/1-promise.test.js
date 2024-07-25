import getFullResponseFromAPI from '../1-promise.js';

test('getFullResponseFromAPI resolves when success is true', () => {
  expect.assertions(1);
  return getFullResponseFromAPI(true).then(response => {
    expect(response).toEqual({ status: 200, body: 'Succès' });
  });
});

test('getFullResponseFromAPI rejects when success is false', () => {
  expect.assertions(1);
  return getFullResponseFromAPI(false).catch(error => {
    expect(error.message).toBe('L\'API factice ne fonctionne pas actuellement');
  });
});
