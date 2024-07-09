// src/app.js
const express = require('express');
const { add, subtract, multiply, divide } = require('./math');

const app = express();
const port = 3000;

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = add(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.get('/subtract/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = subtract(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.get('/multiply/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = multiply(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.get('/divide/:a/:b', (req, res) => {
    const { a, b } = req.params;
    try {
        const result = divide(Number(a), Number(b));
        res.send(`Result: ${result}`);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.listen(port, () => {
    console.log(`Math app listening at http://localhost:${port}`);
});

module.exports = app;
