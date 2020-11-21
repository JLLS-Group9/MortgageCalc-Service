const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const PORT = 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/homes/:id/cost', (req, res) => {
  console.log('req.params', req.params);
  db.getOneCost(req.params.id, (err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})