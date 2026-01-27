import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/database.sqlite");

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT NOT NULL,
      translation TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);
});

export default db;