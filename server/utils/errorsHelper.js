const pageNotFound = (res, error) => {
  return res.status(404).json({ message: 'page not found', error });
};

module.exports = pageNotFound;
