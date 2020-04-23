const express = require('express');
const chronologyController = require('../controllers/chronology-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

router.get('/', chronologyController.getChronology);

router.get('/:_id', chronologyController.getChronologyDay);

router.use(checkAuth);

router.post('/', chronologyController.addChronologyDay);

router.patch('/:_id', chronologyController.updateChronologyDay);

router.delete('/:_id', chronologyController.deleteChronologyDay);

module.exports = router;
