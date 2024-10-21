// routes/successStoryRoutes.js
const express = require('express');
const router = express.Router();
const successStoryController = require('../controllers/successStoryController');

// Create a new success story
router.post('/', successStoryController.createSuccessStory);

// Get all success stories
router.get('/', successStoryController.getAllSuccessStories);

// Get a single success story by ID
router.get('/:id', successStoryController.getSuccessStoryById);

// Update a success story
router.put('/:id', successStoryController.updateSuccessStory);

// Delete a success story
router.delete('/:id', successStoryController.deleteSuccessStory);

module.exports = router;
