const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    instructorId: { type: String, required: true, unique: true },
    instructorName: { type: String, required: true },
    instructorSubject: { type: String },
    instructorDescription: { type: String },
    instructorImage: { type: String }
});

module.exports = mongoose.model('Instructor', instructorSchema);
