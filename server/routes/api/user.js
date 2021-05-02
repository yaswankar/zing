const { Router } = require('express')
const UserSchema = require('../../models/userSchema')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const userItems = await UserSchema.find()
        if (!userItems) throw new Error('No userItems')
        const sorted = userItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newUser = new userItems(req.body)
    try {
        const userItem = await newUser.save()
        if (!userItem) throw new Error('Something went wrong saving the user')
        res.status(200).json(userItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router