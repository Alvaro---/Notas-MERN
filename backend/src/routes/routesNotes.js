const { Router } = require('express');
const routerNotes = Router();

const {getNotes, createNote, deleteNote, updateNote, getOneNote} =require('../controllers/controllerNotes')

routerNotes.route('/')
    .get(getNotes)
    .post(createNote)
 //   .post()

routerNotes.route('/:id')
    .get(getOneNote)
    .put(updateNote)
    .delete(deleteNote)





module.exports = routerNotes;