const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	  res.send('Hello, DevOps World!, HI HI,hello');
});

app.listen(port, () => {
	  console.log(`App running on port ${port}`);
});

