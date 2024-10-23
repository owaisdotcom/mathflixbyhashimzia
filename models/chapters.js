const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    chapterId: { type: String, required: true, unique: true },
    chapterName: { type: String, required: true },
    practiceSheetLink: { type: String },
    classId: { type: String, ref: 'Class', required: true }
});

module.exports = mongoose.model('Chapter', chapterSchema);
