const jwt = require('jsonwebtoken');
const settings = require('../settings');

const createToken = (user, expiresIn) => {
  const token = jwt.sign({ userId: user.id, email: user.email }, settings.SECRET_KEY, {
    expiresIn,
  });

  return token;
};

module.exports = {
  createToken,
};
