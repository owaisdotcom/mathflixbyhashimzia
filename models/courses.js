const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
    courseTitle: { type: String, required: true },
    courseDescription: { type: String },
    coursePrice: { type: Number },
    courseImage: { type: String },
    courseYoutubeUrl: { type: String }
});

module.exports = mongoose.model('Course', courseSchema);
