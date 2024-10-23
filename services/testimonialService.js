// services/testimonialService.js
const Testimonial = require('../models/testimonials');

// Create a new testimonial
exports.createTestimonial = async (data) => {
    const { testimonialId, name, university, description, positionOrMarks, image } = data;
    const newTestimonial = new Testimonial({ testimonialId, name, university, description, positionOrMarks, image });
    return await newTestimonial.save();
};

// Get all testimonials
exports.getAllTestimonials = async () => {
    return await Testimonial.find();
};

// Get a testimonial by ID
exports.getTestimonialById = async (id) => {
    return await Testimonial.findOne({ testimonialId: id });
};

// Update a testimonial
exports.updateTestimonial = async (id, data) => {
    return await Testimonial.findOneAndUpdate({ testimonialId: id }, data, { new: true });
};

// Delete a testimonial
exports.deleteTestimonial = async (id) => {
    return await Testimonial.findOneAndDelete({ testimonialId: id });
};
