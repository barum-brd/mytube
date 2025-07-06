const router = require('express').Router();
const User = require('../models/user');

// Update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can update only your account!');
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can delete only your account!');
  }
});

// Get a user
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Subscribe to a user
router.put('/sub/:id', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      
      if (!user.subscribers.includes(req.body.userId)) {
        await user.updateOne({ $push: { subscribers: req.body.userId } });
        await currentUser.updateOne({ $push: { subscribedUsers: req.params.id } });
        res.status(200).json('User has been subscribed');
      } else {
        res.status(403).json('You already subscribed to this user');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You cant subscribe to yourself');
  }
});

// Unsubscribe from a user
router.put('/unsub/:id', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      
      if (user.subscribers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { subscribers: req.body.userId } });
        await currentUser.updateOne({ $pull: { subscribedUsers: req.params.id } });
        res.status(200).json('User has been unsubscribed');
      } else {
        res.status(403).json('You are not subscribed to this user');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You cant unsubscribe from yourself');
  }
});

// Like a video
router.put('/like/:videoId', async (req, res) => {
  const { userId } = req.body;
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video.likes.includes(userId)) {
      await video.updateOne({ $push: { likes: userId } });
      res.status(200).json('The video has been liked');
    } else {
      await video.updateOne({ $pull: { likes: userId } });
      res.status(200).json('The video has been disliked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;