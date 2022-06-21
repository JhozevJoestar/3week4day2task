const { Router } = require('express');
const router = Router();
const { genresController } = require('../controllers/genres.controllers.js');

router.get('/genre', genresController.getGenres);
router.post('/genre', genresController.addGenre);
router.delete('/genre/:id', genresController.deleteGenre);

module.exports = router;