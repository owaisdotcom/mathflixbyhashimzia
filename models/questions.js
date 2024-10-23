const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_id: { type: Number, required: true, unique: true },
    quiz_id: { type: Number, ref: 'Quiz', required: true },
    question_text: { type: String, required: true },
    question_type: { type: String, required: true },
    question_pic: { type: String },
    answer_selection_type: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);
