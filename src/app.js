const express = require('express');
const sMethods = require('./lib/strings');
const nMethods = require('./lib/numbers');
const bMethods = require('./lib/booleans');
const aMethods = require('./lib/arrays');

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

app.post('/booleans/negate', (req, res) => {
  res.json({ result: bMethods.negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.json({ result: bMethods.truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  const num = parseInt(req.params.num, 10);
  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.json({ result: bMethods.isOdd(parseInt(num, 10)) });
  }
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  if (req.params.char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.json({ result: bMethods.startsWith(req.params.char, req.params.string) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: aMethods.getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.json({ result: aMethods.arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.json({ result: aMethods.addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.json({ result: aMethods.elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  if (req.query.index > 0) {
    res.json({ result: aMethods.removeNthElement2(req.query.index, req.body.array) });
  } else {
    res.json({ result: aMethods.removeNthElement2(0, req.body.array) });
  }
});

module.exports = app;
