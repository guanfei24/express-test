const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth');
const todosRoutes = require('./routes/todos');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
