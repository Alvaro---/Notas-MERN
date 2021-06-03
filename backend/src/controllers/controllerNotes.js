const Note = require('../models/Note');

const notesCtrl = {}

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

notesCtrl.createNote = async (req, res) => {
    //console.log(req.body);
    //console.log(test);
    const { title, content, author, date } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    });
    //console.log(newNote); 
    await newNote.save();
    res.json({ message: 'Nota Guardada' })
};

notesCtrl.updateNote = async (req, res) => {
    //console.log(req.params.id, req.body);
    const { title, content, author, date } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author,
        date: date
    });
    res.json({ message: 'Nota Actualizada' });
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({ message: 'Nota Eliminada' });
};

notesCtrl.getOneNote = async (req, res) => {
    //console.log(req.params.id);
    const note = await Note.findById(req.params.id);
    res.json(note);
};


module.exports = notesCtrl;