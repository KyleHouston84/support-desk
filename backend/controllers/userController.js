const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @desc Register a user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body;

  // Validation
  if(!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user exists
  const userExsits = await User.findOne({email});
  if (userExsits) {
    res.status(400);
    throw new Error('User already exsits');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data')
  }

  res.send('Register Route');
})

// @desc Login a user
// @route /api/users
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
})

module.exports = {
  registerUser,
  loginUser
}