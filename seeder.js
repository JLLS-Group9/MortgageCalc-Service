const db = require('./database');

//create a function to generate 100 records

let values = [100,50,5];

db.insertOne(values, (err) => {
  if (err) {
    console.log(`error inserting data`, err)
  } else {
    console.log('inserted data')
  }
})