const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quiz_id: { type: Number, required: true, unique: true },
    quiz_title: { type: String, required: true },
    quiz_synopsis: { type: String },
    progress_bar_color: { type: String },
    nr_of_questions: { type: Number },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
