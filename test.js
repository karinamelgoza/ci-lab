const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('test 2', () => {
  expect(getGreeting('Karina')).toBe("Hi Karina")
})