const Review = require('../models/Review.model.js');
const mongoose = require('mongoose');

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    try {
      const rev = await Review.create({
        reviewAuthorName: req.body.reviewAuthorName,
        text: req.body.text,
        book: req.body.book,
      } 
      )
      res.json('Рецензия добавлена')
    } catch (error) {
      res.json("error");
    }
  },


  getReviews: async (req, res) => {
    try {
      res.json(await Review.find({book: req.params.id}).populate('book'));
    } catch (error) {
      res.json("error");
    }
  },


  deleteReviews: async (req, res) => {
    try {
      const re = await Review.findByIdAndRemove(req.params.id)
      res.json("Рецензия удалена")
    } catch (error) {
      res.json("error");
    }
  },
}
  