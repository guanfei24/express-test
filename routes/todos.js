const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

router.use(auth);

// Get all todos
router.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ?', [req.user.userId]);
    res.json(rows);
});

// Create todo
router.post('/', async (req, res) => {
    const { title } = req.body;
    await pool.query('INSERT INTO todos (title, user_id) VALUES (?, ?)', [title, req.user.userId]);
    res.status(201).json({ message: 'Todo created' });
});

// Update todo
router.put('/:id', async (req, res) => {
    const { title } = req.body;
    const { id } = req.params;
    await pool.query('UPDATE todos SET title = ? WHERE id = ? AND user_id = ?', [title, id, req.user.userId]);
    res.json({ message: 'Todo updated' });
});

// Delete todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = ? AND user_id = ?', [id, req.user.userId]);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;
