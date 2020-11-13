const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/homes/:id/cost', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})