const Book = require('../models/Book.model');
const mongoose = require('mongoose');

module.exports.booksController = {
getAllBook: async (req, res) => {
    try {
      res.json(await Book.find({}).populate(['genre', 'author']));
    } catch (e) {
      res.json(e)
    }
  },


  addBook: async (req, res) => {
    try {
      const cofe = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    } 
    );
     res.json('Книга добавлена');
  } catch (error) {
    res.json('error')  
  }
},




  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id)
      res.json('Книга удалена');
    } catch (error) {
      res.json("error")
    }
  },



  patchBook: async (req, res) => {
    try {
      const updateBook = await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    })
      res.json("Книга изменена");
    } catch (error) {
      res.json("error")
    }
  },


  getBookById: async (req, res) => {
    try {
      res.json(await Book.findById(req.params.id).populate(['genre', 'author']));
    } catch (error) {
      res.json("error")
    }
  },
  
  
  getBookByGenre: async (req, res) => {
    try {
      res.json(await Book.find({
          genre: req.params.id
        })
        .populate(['genre', 'author']));
    } catch (error) {
      res.json("error")
    }
  },
}