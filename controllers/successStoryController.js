// controllers/successStoryController.js
const successStoryService = require('../services/successStoryService');

// Controller for creating a success story
exports.createSuccessStory = async (req, res) => {
    try {
        const newSuccessStory = await successStoryService.createSuccessStory(req.body);
        return res.status(201).json({ success: true, data: newSuccessStory });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to create success story', error: error.message });
    }
};

// Controller for getting all success stories
exports.getAllSuccessStories = async (req, res) => {
    try {
        const successStories = await successStoryService.getAllSuccessStories();
        return res.status(200).json({ success: true, data: successStories });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to fetch success stories', error: error.message });
    }
};

// Controller for getting a success story by ID
exports.getSuccessStoryById = async (req, res) => {
    try {
        const successStory = await successStoryService.getSuccessStoryById(req.params.id);
        if (!successStory) {
            return res.status(404).json({ success: false, message: 'Success story not found' });
        }
        return res.status(200).json({ success: true, data: successStory });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to fetch success story', error: error.message });
    }
};

// Controller for updating a success story
exports.updateSuccessStory = async (req, res) => {
    try {
        const updatedSuccessStory = await successStoryService.updateSuccessStory(req.params.id, req.body);
        if (!updatedSuccessStory) {
            return res.status(404).json({ success: false, message: 'Success story not found' });
        }
        return res.status(200).json({ success: true, data: updatedSuccessStory });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to update success story', error: error.message });
    }
};

// Controller for deleting a success story
exports.deleteSuccessStory = async (req, res) => {
    try {
        const deletedSuccessStory = await successStoryService.deleteSuccessStory(req.params.id);
        if (!deletedSuccessStory) {
            return res.status(404).json({ success: false, message: 'Success story not found' });
        }
        return res.status(200).json({ success: true, message: 'Success story deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to delete success story', error: error.message });
    }
};
