// routes/playlistRoutes.js
const express = require('express');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

// Route to get all playlists
router.get('/', playlistController.getAllPlaylists);

// Route to get a specific playlist by ID
router.get('/:playlistId', playlistController.getPlaylistById);

// Route to create a new playlist
router.post('/', playlistController.createPlaylist);

// Route to update a playlist by ID
router.put('/:playlistId', playlistController.updatePlaylist);

// Route to delete a playlist by ID
router.delete('/:playlistId', playlistController.deletePlaylist);

module.exports = router;
