// controllers/instructorController.js
const instructorService = require('../services/instructorService');

// Get all instructors
const getAllInstructors = async (req, res) => {
    try {
        const instructors = await instructorService.getAllInstructors();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching instructors', error });
    }
};

// Get an instructor by ID
const getInstructorById = async (req, res) => {
    const { instructorId } = req.params;
    try {
        const instructor = await instructorService.getInstructorById(instructorId);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
        res.status(200).json(instructor);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching instructor', error });
    }
};

// Create a new instructor
const createInstructor = async (req, res) => {
    const instructorData = req.body;
    try {
        const newInstructor = await instructorService.createInstructor(instructorData);
        res.status(201).json(newInstructor);
    } catch (error) {
        res.status(500).json({ message: 'Error creating instructor', error });
    }
};

// Update an instructor
const updateInstructor = async (req, res) => {
    const { instructorId } = req.params;
    const updatedData = req.body;
    try {
        const updatedInstructor = await instructorService.updateInstructor(instructorId, updatedData);
        if (!updatedInstructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
        res.status(200).json(updatedInstructor);
    } catch (error) {
        res.status(500).json({ message: 'Error updating instructor', error });
    }
};

// Delete an instructor
const deleteInstructor = async (req, res) => {
    const { instructorId } = req.params;
    try {
        const deletedInstructor = await instructorService.deleteInstructor(instructorId);
        if (!deletedInstructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
        res.status(200).json({ message: 'Instructor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting instructor', error });
    }
};

module.exports = {
    getAllInstructors,
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor
};
