// routes/uploadRoutes.js
const express = require('express');
const router = express.Router();
const cloudinary = require('./../cloudinaryConfig');
const upload = require('./../middleware/multer');

// Handle file upload
router.post('/', upload.single('file'), (req, res) => {
    // Upload the file to Cloudinary
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) {
            console.error('Cloudinary Upload Error:', err);
            return res.status(500).json({
                success: false,
                message: 'File upload failed',
                error: err.message, // Include error message for debugging
            });
        }

        // Return only the secure URL of the uploaded image
        return res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            secure_url: result.secure_url, // Extracting the secure_url from the Cloudinary response
        });
    });
});

module.exports = router;
