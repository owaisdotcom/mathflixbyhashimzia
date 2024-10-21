const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
    successStoryId: { type: String, required: true, unique: true },
    image: { type: String },
    category: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('SuccessStory', successStorySchema);
