const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: [String], // Array of team member names
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  technologyUsed: [{ type: String, required: true }], 
  livePreviewLink: {
    type: String,
  },
  githubLink: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String], // Array of image URLs
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
