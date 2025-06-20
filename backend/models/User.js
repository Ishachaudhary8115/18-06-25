const db = require('../dbConfig/db');

class User {
  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query('SELECT id, email, password FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return reject(err);
        resolve(results.length > 0 ? results[0] : null);
      });
    });
  }

  static create(email, hashedPassword) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, email });
      });
    });
  }

  static getAllUsers() {
    return new Promise((resolve, reject) => {
      db.query('SELECT id, email FROM users', (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = User;
