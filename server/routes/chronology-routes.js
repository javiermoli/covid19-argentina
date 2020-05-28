const express = require('express');
const chronologyController = require('../controllers/chronology-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

router.get('/', chronologyController.getChronology);

// This is a way to group multiple verbs handling one single route
router.route('/:_id')
	.get(chronologyController.getChronologyDay)
	.patch(chronologyController.updateChronologyDay)
	.delete(chronologyController.deleteChronologyDay);

router.use(checkAuth);

router.post('/', chronologyController.addChronologyDay);

module.exports = router;
