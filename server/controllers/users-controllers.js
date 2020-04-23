const bcrypt = require('bcryptjs');
const User = require('../models/User');
const pageNotFound = require('../utils/errorsHelper');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return pageNotFound(res, 'Could search user');
  }

  if (existingUser) {
    return pageNotFound(res, 'User already exits');
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return pageNotFound(res, err);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    return pageNotFound(res, 'Could not save user');
  }

  let token;
  try {
    token = jwt.sign({ userId: createdUser.id, email: createdUser.email }, 'secret-key-1234', {
      expiresIn: '1h',
    });
  } catch (error) {
    return pageNotFound(res, 'Could not generate token');
  }

  res.status(201).json({ user: { name, email, token } });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return pageNotFound(res);
  }

  if (!existingUser) {
    return pageNotFound(res);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    return pageNotFound(res);
  }

  if (!isValidPassword) {
    return pageNotFound(res);
  }

  let token;
  try {
    token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, 'secret-key-1234', {
      expiresIn: '1h',
    });
  } catch (error) {
    return pageNotFound(res);
  }

  res.json({
    message: 'Logged in!',
    user: { email, token },
  });
};

module.exports = {
  signup,
  login,
};
