const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;