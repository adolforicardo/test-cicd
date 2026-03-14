const test = require('node:test');
const assert = require('node:assert/strict');

const { app } = require('../index');

test('GET / returns Hello World', async (t) => {
  const server = app.listen(0);

  t.after(() => {
    server.close();
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/`);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'Hello World');
});
