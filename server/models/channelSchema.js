const { Schema, model } = require('mongoose')

const ChannelSchema = new Schema({
    channelName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Channel = model('Channel', ChannelSchema);

module.exports = Channel