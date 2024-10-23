// controllers/userController.js
const userService = require('../services/UserService');

// Controller function to handle user registration
const registerUser = async (req, res) => {
    try {
        // Extract data from the request body
        const { username, email, password } = req.body;

        // Pass data to the service layer
        await userService.registerUser({ username, email, password });

        // Send a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // Send an error response
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser };
