const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    testimonialId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    university: { type: String },
    description: { type: String },
    positionOrMarks: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
