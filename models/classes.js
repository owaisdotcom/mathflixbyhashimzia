const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    classId: { type: String, required: true, unique: true },
    className: { type: String, required: true },
    categoryId: { type: String, ref: 'Category', required: true }
});

module.exports = mongoose.model('Class', classSchema);
