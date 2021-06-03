const { Schema, model } = require('mongoose');

const userShcema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true,
})

module.exports = model('user', userShcema);


