const mysql = require('mysql');
const dbconfig = require('./config.js');

const connection = mysql.createConnection(dbconfig);

const getOneCost = function(id, callback) {
  connection.query(`select * from home_prices where id = ${id}`, (err, rows) => {
    if (err) {
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

const insertOne = function(params, callback) {
  connection.query(`insert into home_prices (home_price, property_tax, hoa) values(?, ?, ?);`,params, (err, rows) => {
    if (err) {
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

module.exports = {
  getOneCost,
  insertOne
}