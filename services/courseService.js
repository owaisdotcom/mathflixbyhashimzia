const Course = require('../models/courses');

// Get all courses
const getAllCourses = async () => {
    return await Course.find();
};

// Get a course by ID
const getCourseById = async (courseId) => {
    return await Course.findOne({ courseId });
};

// Create a new course
const createCourse = async (courseData) => {
    const newCourse = new Course(courseData);
    return await newCourse.save();
};

// Update a course by ID
const updateCourse = async (courseId, updatedData) => {
    return await Course.findOneAndUpdate({ courseId }, updatedData, { new: true });
};

// Delete a course by ID
const deleteCourse = async (courseId) => {
    return await Course.findOneAndDelete({ courseId });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
