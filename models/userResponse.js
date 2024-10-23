const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
    response_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, ref: 'User', required: true },
    quiz_id: { type: Number, ref: 'Quiz' },
    question_id: { type: Number, ref: 'Question' },
    selected_answer_id: { type: Number, ref: 'Answer' },
    is_correct: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserResponse', userResponseSchema);
