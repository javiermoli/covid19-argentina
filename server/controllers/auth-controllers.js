const bcrypt = require('bcryptjs');
const User = require('../models/User');
const HttpError = require('../models/HttpError');
const { createToken } = require('../utils/authHelper');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again later.', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError('User exists already, please login instead.', 422);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError('Could not create user, please try again.', 500);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  let token;
  let refreshToken;
  try {
    token = createToken(createdUser, '2h');
    refreshToken = createToken(createdUser, '2d');
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ user: { name, email, token, refreshToken } });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Log in failed, please try again later.', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError('Invalid credentials, could not log you in.', 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError('Log in failed, please try again later.', 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Invalid credentials, could not log you in.', 401);
    return next(error);
  }

  let token;
  let refreshToken;
  try {
    token = createToken(existingUser, '2h');
    refreshToken = createToken(existingUser, '2d');
  } catch (err) {
    const error = new HttpError('Log in failed, please try again later.', 500);
    return next(error);
  }

  res.json({
    message: 'Logged in!',
    user: { email, token, refreshToken },
  });
};

const refreshToken = async (req, res, next) => {
  const { userId } = req.userData;

  let existingUser;

  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError('Refresh token failed, please try again later.', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError('Invalid credentials, could not find the user.', 401);
    return next(error);
  }

  let token;
  try {
    token = createToken(existingUser, '2h');
  } catch (err) {
    const error = new HttpError('Refresh token failed, please try again later.', 500);
    return next(error);
  }

  res.json({
    message: 'Token refreshed',
    user: { email: existingUser.email, token },
  });
};

module.exports = {
  signup,
  login,
  refreshToken,
};
