const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topicId: { type: String, required: true, unique: true },
    chapterName: { type: String, required: true },
    practiceSheetLink: { type: String },
    classId: { type: String, ref: 'Class', required: true }
});

module.exports = mongoose.model('Topic', topicSchema);
