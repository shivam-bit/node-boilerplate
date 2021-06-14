const express = require('express');

const app = express();

app.use(express.json());
app.get('/api/v1', (req, res) =>
    res.json({
        success: true,
        message: 'Server is up',
    }),
);

module.exports = app;
