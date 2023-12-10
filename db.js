const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      ticketNumber TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      message TEXT
    )
  `);
});

module.exports = db;
