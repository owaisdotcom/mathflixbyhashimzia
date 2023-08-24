const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL. 
// Replace '<username>', '<password>', '<cluster>', and '<database>' with your actual MongoDB credentials and database name.
const dbURL = process.env.MONGODB_URL;

// MongoDB options
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbURL, dbOptions)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error: ', error);
    });

module.exports = mongoose.connection;
