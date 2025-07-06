const router = require('express').Router();
const Video = require('../models/video');

// Create a video
router.post('/', async (req, res) => {
  const newVideo = new Video(req.body);
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update video
router.put('/:id', async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete video
router.delete('/:id', async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json('Video has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get video
router.get('/find/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

// View video
router.put('/view/:id', async (req, res) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 }
    });
    res.status(200).json('The view has been increased.');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get trending videos
router.get('/trend', async (req, res) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get random videos
router.get('/random', async (req, res) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get videos by tags
router.get('/tags', async (req, res) => {
  const tags = req.query.tags.split(',');
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search videos
router.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: 'i' }
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;