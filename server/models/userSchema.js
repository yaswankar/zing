const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const User = model('User', UserSchema)

module.exports = User