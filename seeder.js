const db = require('./database');

//create a function to generate 100 records
const seed = function() {
  for(var i = 0; i < 100; i++) {
    let data = [
      Math.round((Math.floor(Math.random() * 2000000) + 100000) / 100) * 100,
      Math.floor(Math.random() * 500)
    ]

    data.splice(1,0,Math.round(data[0]*.0069))

    db.insertOne(data, (err) => {
      if (err) {
        console.log(`error inserting data`, err)
      } else {
        console.log('inserted data')
      }
    })
  }
}

seed();

