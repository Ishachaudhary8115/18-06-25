const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your DB username
  password: '',        // your DB password
  database: 'nextdemo'  //  DB name
});

const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL DB');
  
  db.query(createUsersTableQuery, (err) => {
    if (err) {
      console.error('Failed to create users table:', err);
    } else {
      console.log('User table ensured in database');
    }
  });
});

module.exports = db;
