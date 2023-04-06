const api = require('express').Router();
const { readFromFile, readAndAppend } = require('../utils/fsUtils')
const uuid = require('../utils/uuid')


api.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})
api.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text, note_id } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// api.delete('/notes/:id', () => {

// })
module.exports = api;