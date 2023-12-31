const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });
router.use(authController.protect);
router
  .route('/')
  .get(reviewController.getAllReview)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourAndUserIds,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(
    authController.restrictTo('admin', 'user'),
    reviewController.deleteReview,
  )
  .patch(
    authController.restrictTo('admin', 'user'),
    reviewController.updateReview,
  );
module.exports = router;
