import db from "../db.js";

export const getAllWords = () =>
    new Promise((resolve, reject) => {
        db.all("SELECT * FROM words", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });

export const addWord = ({ word, translation }) =>
    new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO words (word, translation, created_at) VALUES (?, ?, ?)",
            [word, translation, new Date().toISOString()],
            function (err) {
                if (err) reject(err);
                resolve({ id: this.lastID });
            }
        );
    });

export const deleteWord = (id) =>
    new Promise((resolve, reject) => {
        db.run("DELETE FROM words WHERE id = ?", [id], (err) => {
            if (err) reject(err);
            resolve();
        });
    });

export const editWord = (id, {word, translation}) =>
    new Promise((resolve, reject) => {
        db.run("UPDATE words SET word = ?, translation = ? WHERE id = ?", [word, translation, id],
            function (err)  {
                if (err) reject(err);
                resolve({ updatedRows: this.changes });
            });
    });

export const getWordByID = (id) =>
    new Promise((resolve, reject) => {
        db.get(
            "SELECT * FROM words WHERE id = ?",
            [id],
            (err, row) => {
                if (err) reject(err);
                resolve(row);
            }
        );
    });export const getWords = (query) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT * FROM words
            WHERE word LIKE ? 
            ORDER BY word ASC
        `;

        db.all(sql, [`%${query}%`], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};