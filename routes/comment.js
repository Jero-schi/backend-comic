const express = require('express');
const router = express.Router();
const Comment = require('.../models/Comment')

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/', async (req, res) => {
    const { name, rating, comment } = req.body
    const newComment = new Comment({ name, rating, comment})

    try {
        const savedComment = await newComment.save()
        res.status(201).json(savedComment)
    } catch (error) {
        res.json(400).json({ message: error.message })
    }
})

module.exports = router