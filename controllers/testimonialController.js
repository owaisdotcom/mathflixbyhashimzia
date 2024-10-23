// controllers/testimonialController.js
const testimonialService = require('../services/testimonialService');

// Controller for creating a testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const newTestimonial = await testimonialService.createTestimonial(req.body);
        return res.status(201).json({ success: true, data: newTestimonial });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to create testimonial', error: error.message });
    }
};

// Controller for getting all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await testimonialService.getAllTestimonials();
        return res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to fetch testimonials', error: error.message });
    }
};

// Controller for getting a testimonial by ID
exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await testimonialService.getTestimonialById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }
        return res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to fetch testimonial', error: error.message });
    }
};

// Controller for updating a testimonial
exports.updateTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
        if (!updatedTestimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }
        return res.status(200).json({ success: true, data: updatedTestimonial });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to update testimonial', error: error.message });
    }
};

// Controller for deleting a testimonial
exports.deleteTestimonial = async (req, res) => {
    try {
        const deletedTestimonial = await testimonialService.deleteTestimonial(req.params.id);
        if (!deletedTestimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }
        return res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to delete testimonial', error: error.message });
    }
};
