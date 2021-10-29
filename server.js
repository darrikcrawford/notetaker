const fs = require('fs')
const express = require('express');
const { notes } = require('./Develop/data/notes.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  })