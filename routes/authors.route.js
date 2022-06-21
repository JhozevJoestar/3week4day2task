const { Router } = require('express');
const router = Router();
const { authorsController } = require('../controllers/authors.controllers.js');

router.post('/author', authorsController.addAuthor);

module.exports = router;