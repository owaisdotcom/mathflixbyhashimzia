const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    playlistId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    youtubeUrl: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Playlist', playlistSchema);
