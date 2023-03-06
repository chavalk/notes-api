const express = require('express');
const fs = require('fs');

require('./db/mongoose');

const Note = require('./models/note');

const app = express();

app.use(express.json());

app.get('/notes', (req, res) => {
    const notes = Note.find()
});

app.post('/notes', (req, res) => {
    const note = new Note(req.body)

    note.save()
    .then(() => {
        res.status(200).send(note)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
});

app.listen(3000, () => {
    console.log("Server is up on port 3000")
});