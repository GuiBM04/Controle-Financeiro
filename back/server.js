const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database(':memory:');

// Criar tabelas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS months (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            month_id INTEGER,
            day INTEGER,
            value INTEGER,
            FOREIGN KEY (month_id) REFERENCES months(id)
        );
    `);
});





/*                               METODOS POST                               */

// POST MONTH
app.post('/post-month', (req, res) => {
    const { name } = req.body;

    db.run(`INSERT INTO months (name) VALUES (${name})`, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Mes inserido' });
    });
});

// POST TRANSACTION
app.post('/post-transaction', (req, res) => {
    const { month_id, day, value } = req.body;

    db.run(`INSERT INTO transactions (month_id, day, value) VALUES (?, ?, ?)`, [month_id, day, value], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Valor inserido', id: this.lastID });
    });
});








/*                               METODOS GET                               */

// GET MONTHS
app.get('/months', (req, res) => {
    db.all("SELECT * FROM months;", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// GET TRANSACTION BY MONTH
app.get('/month', (req, res) => {
    const { month_id } = req.query;

    db.all(`SELECT * FROM transactions WHERE month_id = ${month_id};`, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});








/*                               METODOS DELETE                               */

// DELETE MONTH
app.delete('/month/:month_id', (req, res) => {
    const { month_id } = req.params;
  
    db.run("DELETE FROM months WHERE id = ?", [month_id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: 'Mês não encontrado' });
      }
      res.json({ message: 'Mês deletado com sucesso' });
    });
});

// DELETE TRANSACTION
app.delete('/transaction/:transaction_id', (req, res) => {
    const { transaction_id } = req.params;
  
    db.run("DELETE FROM transactions WHERE id = ?", [transaction_id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: 'Transação não encontrada' });
      }
      res.json({ message: 'Transação deletado com sucesso' });
    });
});



// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
