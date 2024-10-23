// services/userService.js
const User = require('../models/user');

// Function to register a new user
const registerUser = async ({ username, email, password }) => {
    // Create a new user object
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    return newUser; // Return the saved user for further use if needed
};

module.exports = { registerUser };
