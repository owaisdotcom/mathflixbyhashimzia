const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Route to get all courses
router.get('/', courseController.getAllCourses);

// Route to get a course by ID
router.get('/:courseId', courseController.getCourseById);

// Route to create a new course
router.post('/', courseController.createCourse);

// Route to update a course by ID
router.put('/:courseId', courseController.updateCourse);

// Route to delete a course by ID
router.delete('/:courseId', courseController.deleteCourse);

module.exports = router;
