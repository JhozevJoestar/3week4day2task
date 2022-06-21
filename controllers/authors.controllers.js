const Author = require('../models/Author.model');
const mongoose = require('mongoose');

module.exports.authorsController = {
  addAuthor: async (req, res) => {
    const {name, description} = req.body
    try {
      res.json(`Добавлен автор ${(await Author.create({name, description})).name}`)
    } catch (e) {
      res.json(e)
    };
  }
}