// services/instructorService.js
const Instructor = require('../models/instructors');

// Get all instructors
const getAllInstructors = async () => {
    return await Instructor.find();
};

// Get an instructor by ID
const getInstructorById = async (instructorId) => {
    return await Instructor.findOne({ instructorId });
};

// Create a new instructor
const createInstructor = async (instructorData) => {
    const newInstructor = new Instructor(instructorData);
    return await newInstructor.save();
};

// Update an instructor by ID
const updateInstructor = async (instructorId, updatedData) => {
    return await Instructor.findOneAndUpdate({ instructorId }, updatedData, { new: true });
};

// Delete an instructor by ID
const deleteInstructor = async (instructorId) => {
    return await Instructor.findOneAndDelete({ instructorId });
};

module.exports = {
    getAllInstructors,
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor
};
