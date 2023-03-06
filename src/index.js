const express = require('express');
const fs = require('fs');

require('./db/mongoose');

const Note = require('./models/note');

const app = express();

app.get('/notes', (req, res) => {
    fs.readFile(__dirname + '/' + "notes.json", "utf-8", (err, data) => {
        if (err) {
            return console.log(err)
        }

        res.status(200).send(data)
    })
});

app.post('notes', (req, res) => {
    const note = new Note(req.body)
});

app.listen(3000, () => {
    console.log("Server is up on port 3000")
});