const { Router } = require('express')
const { Channel, ChannelUsers} = require('../../models/channelSchema');

const router = Router()

router.get('/', async (req, res) => {
    try {
        const channels = await Channel.find()
        if (!channels) throw new Error('No channels')
        const sorted = channels.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const data = req.body;
    const newChannel = new Channel({channelName: data.channelName, users: [data.user]})
    try {
        const channel = await newChannel.save();
        if (!channel) throw new Error('Something went wrong saving the channel')
        res.status(200).json(channel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.patch('/', async(req, res) => {
    const {channelName, user} = req.body;
    try {
        const userAdd = await Channel.findOneAndUpdate(
            {channelName: channelName},
            { $push: { users: user } }
        );
        if (!userAdd) throw new Error('Something went wrong saving the channel')
        res.status(200).json(userAdd)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = router