function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test('tag function', () => {
  const name = "John";
  const lastName = "Doe";

  tagFunction`Hello ${name} ${lastName}!, how are you`;
  tagFunction`Bye ${name} ${lastName}!, see you later!`;
});

test('tag function sql', () => {
  const name = "John";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});