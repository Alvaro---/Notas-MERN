const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true,
    },
    author: String,
    date: {
        type: Date,
        defaul: Date.now  
    }
}, {
    timestamps: true
})

module.exports = model('note', noteSchema);