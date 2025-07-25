const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  },
  likes: {
    type: [String],
    default: []
  },
  dislikes: {
    type: [String],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);