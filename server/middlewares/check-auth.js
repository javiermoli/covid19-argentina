const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(404).send('Error to find user');
    }
    const decodedToken = jwt.verify(token, 'secret-key-1234');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(404).send('Error to find user');
  }
};
