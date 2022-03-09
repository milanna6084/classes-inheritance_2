import { checkName, checkType } from '../validatior';

test.each([
  { name: '', expected: false },
  { name: 'I', expected: false },
  { name: 15864, expected: false },
  { name: 'Hello', expected: true },
  { name: 'Hi', expected: true },
  { name: 'Hi my name is Ann', expected: false },
  { name: 'Impossible', expected: true },
])('validate name', (obj) => {
  const result = checkName(obj.name);

  expect(obj.expected).toBe(result);
});

test.each([
  { type: '', expected: false },
  { type: 'I', expected: false },
  { type: 15864, expected: false },
  { type: 'Wizard', expected: false },
  { type: 'Bowerman', expected: true },
  { type: 'zombie', expected: false },
  { type: 'Undaed', expected: false },
])(
  ('validate type'), (obj) => {
    const result = checkType(obj.type);

    expect(obj.expected).toBe(result);
  },
);
