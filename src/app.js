const express = require('express');
const sMethods = require('./lib/strings');
const nMethods = require('./lib/numbers');

const app = express();

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

module.exports = app;
