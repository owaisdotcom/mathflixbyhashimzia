// routes/instructorRoutes.js
const express = require('express');
const instructorController = require('../controllers/instructorController');

const router = express.Router();

// Route to get all instructors
router.get('/', instructorController.getAllInstructors);

// Route to get an instructor by ID
router.get('/:instructorId', instructorController.getInstructorById);

// Route to create a new instructor
router.post('/', instructorController.createInstructor);

// Route to update an instructor by ID
router.put('/:instructorId', instructorController.updateInstructor);

// Route to delete an instructor by ID
router.delete('/:instructorId', instructorController.deleteInstructor);

module.exports = router;
