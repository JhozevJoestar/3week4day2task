const { Router } = require('express');
const router = Router();


const { reviewsController } = require('../controllers/reviews.controllers.js');



router.get('/reviews/:id', reviewsController.getReviews);
router.delete('/reviews/:id', reviewsController.deleteReviews);
router.post('/reviews', reviewsController.addReviews);


module.exports = router;
