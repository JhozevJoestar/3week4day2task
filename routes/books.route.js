const { Router } = require('express');
const router = Router();
const { booksController } = require('../controllers/books.controllers.js')

router.post('/books', booksController.addBook);
router.delete('/books/:id', booksController.deleteBook);
router.patch('/books/:id', booksController.patchBook);
router.get('/books/:id', booksController.getBookById);
router.get('/books', booksController.getAllBook);
router.get('/books/genre/:id', booksController.getBookByGenre);


module.exports = router;