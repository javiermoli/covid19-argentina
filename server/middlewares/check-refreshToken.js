const jwt = require('jsonwebtoken');
const settings = require('../settings');
const HttpError = require('../models/HttpError');

module.exports = (req, res, next) => {
  try {
    const token = req.body.refreshToken;
    if (!token) {
      const error = new HttpError('Refresh token expected.', 500);
      return next(error);
    }
    const decodedToken = jwt.verify(token, settings.SECRET_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError('Error decoding refresh token.', 401);
    return next(error);
  }
};
