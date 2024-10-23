const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answer_id: { type: Number, required: true, unique: true },
    question_id: { type: Number, ref: 'Question', required: true },
    answer_text: { type: String, required: true },
    is_correct: { type: Boolean, default: false }
});

module.exports = mongoose.model('Answer', answerSchema);
