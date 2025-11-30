const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { validateSubmission } = require('../middlewares/validator');


router.post('/submit', validateSubmission, apiController.handleSubmit);


router.get('/submissions', apiController.getSubmissionsJson);


module.exports = router;