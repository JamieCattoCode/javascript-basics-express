const express = require('express');
const sMethods = require('./lib/strings');
const nMethods = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:inString', (req, res) => {
  res.json({ result: sMethods.sayHello(req.params.inString) });
});

app.get('/strings/upper/:inString', (req, res) => {
  res.json({ result: sMethods.uppercase(req.params.inString) });
});

app.get('/strings/lower/:inString', (req, res) => {
  res.json({ result: sMethods.lowercase(req.params.inString) });
});

app.get('/strings/first-characters/:inString', (req, res) => {
  if (req.query.length) {
    res.json({ result: sMethods.firstCharacters(req.params.inString, req.query.length) });
  } else {
    res.json({ result: sMethods.firstCharacter(req.params.inString) });
  }
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: nMethods.add(num1, num2) });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: nMethods.subtract(num2, num1) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    const num1 = parseInt(req.body.a, 10);
    const num2 = parseInt(req.body.b, 10);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
      res.json({ result: nMethods.multiply(num1, num2) });
    }
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    const num1 = parseInt(req.body.a, 10);
    const num2 = parseInt(req.body.b, 10);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
      res.json({ result: nMethods.divide(num1, num2) });
    }
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    const num1 = parseInt(req.body.a, 10);
    const num2 = parseInt(req.body.b, 10);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.json({ result: nMethods.remainder(num1, num2) });
    }
  }
});

module.exports = app;
