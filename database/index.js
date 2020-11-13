const mysql = require('mysql');
const dbconfig = require('./config.js');

const connection = mysql.createConnection(dbconfig);

const getOneCost = function(callback) {
  connection.query(`select * from home_prices where id = ${id}`, (err, rows) => {
    if (err) {
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

module.exports = {
  getOneCost
}