// services/successStoryService.js
const SuccessStory = require('../models/success');

// Create a new success story
exports.createSuccessStory = async (data) => {
    const { successStoryId, image, category, description } = data;
    const newSuccessStory = new SuccessStory({ successStoryId, image, category, description });
    return await newSuccessStory.save();
};

// Get all success stories
exports.getAllSuccessStories = async () => {
    return await SuccessStory.find();
};

// Get a success story by ID
exports.getSuccessStoryById = async (id) => {
    return await SuccessStory.findOne({ successStoryId: id });
};

// Update a success story
exports.updateSuccessStory = async (id, data) => {
    return await SuccessStory.findOneAndUpdate({ successStoryId: id }, data, { new: true });
};

// Delete a success story
exports.deleteSuccessStory = async (id) => {
    return await SuccessStory.findOneAndDelete({ successStoryId: id });
};
