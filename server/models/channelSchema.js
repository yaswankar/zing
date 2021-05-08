const { Schema, model } = require('mongoose')

const ChannelSchema = new Schema({
    channelName: {
        type: String,
        required: true,
    },
    users: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Channel = model('Channel', ChannelSchema);

module.exports = {Channel}