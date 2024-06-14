const express = require('express');
const Comment = require('./Comment')
const dbconnect = require('./config');
const app = express()

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, rating, comment } = req.body;
    const newComment = new Comment({ username, rating, comment });

    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.use(express.json())
app.use(router)

app.listen(3500, () => {
    console.log('el server esta en el puerto 3001');
})

dbconnect();