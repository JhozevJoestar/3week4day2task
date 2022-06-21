const Genre = require('../models/Genre.model');
const mongoose = require('mongoose');

module.exports.genresController = {
  addGenre: async (req, res) => {
    const {
      name,
      desc
    } = req.body
    try {
      res.json(`Добавлен жанр ${(await Genre.create({ name, desc })).name}`);
    } catch (error) {
      res.json("error")
    }
  },


  deleteGenre: async (req, res) => {
    try {
      const gen = await Genre.findByIdAndRemove(req.params.id)
      res.json("Жанр удален");
    } catch (error) {
      res.json("error")
    }
  },

  
  getGenres: async (req, res) => {
    try {
      res.json(await Genre.find({}));
    } catch (error) {
      res.json("error")
    }
  },
}