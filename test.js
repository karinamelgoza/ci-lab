const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('test 2', () => {
  expect(getGreeting('Karina')).toBe("Hi Karina")
})

test('test3', () => {
  expect(getGreeting('karina')).toBeNaN
})

test('test4', () => {
  expect(getGreeting('Bob')).tobe('Hi Bob')
})