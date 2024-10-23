const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const successStoryRoutes = require('./routes/successStoryRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

// Set up your routes
app.use('/auth', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/success-stories', successStoryRoutes);



// Logging middleware
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for '${req.url}'`);
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
