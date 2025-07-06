const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json('User already exists!');
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json('Wrong credentials');
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: _, ...userInfo } = user._doc;
    
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;