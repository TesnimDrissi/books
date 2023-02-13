const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'houyemaloui',
  database: 'library'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('happy library!')
  }
});


module.exports = connection