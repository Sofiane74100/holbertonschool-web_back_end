import handleProfileSignup from './6-final-user.js';

test("handleProfileSignup returns the right array", async () => {
  const result = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
  expect(result).toEqual([
    {
      status: 'fulfilled',
      value: { firstName: 'John', lastName: 'Doe' },
    },
    {
      status: 'rejected',
      value: new Error('Gerald.jpg cannot be processed'),
    },
  ]);
});
