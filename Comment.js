const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: String,
    rating: Number,
    comment: String,
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;