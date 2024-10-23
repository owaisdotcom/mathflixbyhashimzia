// controllers/playlistController.js
const playlistService = require('../services/playlistService');

// Get all playlists
const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await playlistService.getAllPlaylists();
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching playlists', error });
    }
};

// Get a playlist by ID
const getPlaylistById = async (req, res) => {
    const { playlistId } = req.params;
    try {
        const playlist = await playlistService.getPlaylistById(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching playlist', error });
    }
};

// Create a new playlist
const createPlaylist = async (req, res) => {
    const playlistData = req.body;
    try {
        const newPlaylist = await playlistService.createPlaylist(playlistData);
        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).json({ message: 'Error creating playlist', error });
    }
};

// Update a playlist by ID
const updatePlaylist = async (req, res) => {
    const { playlistId } = req.params;
    const updatedData = req.body;
    try {
        const updatedPlaylist = await playlistService.updatePlaylist(playlistId, updatedData);
        if (!updatedPlaylist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        res.status(200).json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ message: 'Error updating playlist', error });
    }
};

// Delete a playlist by ID
const deletePlaylist = async (req, res) => {
    const { playlistId } = req.params;
    try {
        const deletedPlaylist = await playlistService.deletePlaylist(playlistId);
        if (!deletedPlaylist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting playlist', error });
    }
};

module.exports = {
    getAllPlaylists,
    getPlaylistById,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
};
