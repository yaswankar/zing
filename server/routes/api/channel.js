const { Router } = require('express')
const ChannelSchema = require('../../models/channelSchema');

const router = Router()

router.get('/', async (req, res) => {
    try {
        const channels = await ChannelSchema.find()
        if (!channels) throw new Error('No channels')
        const sorted = channels.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router