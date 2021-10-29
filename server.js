const fs = require('fs')
const express = require('express');
const { notes } = require('./Develop/data/notes.json');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

function createNewNote(body, notesArray) {
  console.log(body);
  // our function's main code will go here!

  // return finished code to post route for response
  return body;
}

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  res.json(req.body);
});

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });