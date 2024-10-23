const courseService = require('../services/courseService');

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
};

// Get course by ID
const getCourseById = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await courseService.getCourseById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error });
    }
};

// Create a new course
const createCourse = async (req, res) => {
    const courseData = req.body;
    try {
        const newCourse = await courseService.createCourse(courseData);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
};

// Update a course
const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const updatedData = req.body;
    try {
        const updatedCourse = await courseService.updateCourse(courseId, updatedData);
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
};

// Delete a course
const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const deletedCourse = await courseService.deleteCourse(courseId);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting course', error });
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
