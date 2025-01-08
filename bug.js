const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    // Error handling is missing, will crash the server
    console.error(err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
}