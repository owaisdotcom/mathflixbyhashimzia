// services/playlistService.js
const Playlist = require('../models/playlists');

// Get all playlists
const getAllPlaylists = async () => {
    return await Playlist.find();
};

// Get a playlist by ID
const getPlaylistById = async (playlistId) => {
    return await Playlist.findOne({ playlistId });
};

// Create a new playlist
const createPlaylist = async (playlistData) => {
    const newPlaylist = new Playlist(playlistData);
    return await newPlaylist.save();
};

// Update a playlist by ID
const updatePlaylist = async (playlistId, updatedData) => {
    return await Playlist.findOneAndUpdate({ playlistId }, updatedData, { new: true });
};

// Delete a playlist by ID
const deletePlaylist = async (playlistId) => {
    return await Playlist.findOneAndDelete({ playlistId });
};

module.exports = {
    getAllPlaylists,
    getPlaylistById,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
};
