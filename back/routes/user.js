const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {});
app.post('/', (req, res) => {});
app.get('/:id', (req, res) => {});
app.post('/logout', (req, res) => {});
app.post('/login', (req, res) => {});
app.get('/:id/follow', (req, res) => {});
app.post('/:id/follow', (req, res) => {});
app.delete('/:id/follower', (req, res) => {});
app.get('/:id/posts', (req, res) => {});

module.exports = router;
