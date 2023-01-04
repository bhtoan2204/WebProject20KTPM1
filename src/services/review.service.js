const Review = require('../models/review.model');

const reviewService = {
  getReviewsByBookId: (bookId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const reviews = Review.findAll({
          where: {
            bookId: bookId
          },
          raw: true
        });
        return resolve(reviews);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    })
  },

  createReview: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Review.create(data);
        return resolve(result);
      } catch (error) {
        return reject(error);
      }
    })
  }
}

module.exports = reviewService;