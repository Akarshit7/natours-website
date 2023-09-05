const express = require('express');
const tourController = require('../controllers/tourController');
const authcontroller = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();
// router.param('id', tourController.checkId);

//check body middleware function
//check if the body contains the name property and the price property
//If not send 400 (bad request);
//Add it to the post handler stack

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);
router.route('/tours-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authcontroller.protect,
    authcontroller.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
router.route('/distance/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authcontroller.protect,
    authcontroller.restrictTo('admin', 'lead-guide'),
    tourController.createTour,
  );
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authcontroller.protect,
    authcontroller.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour,
  )
  .delete(
    authcontroller.protect,
    authcontroller.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

// router
//   .route('/:tourId/reviews')
//   .post(authcontroller.protect, authcontroller.restrictTo('user'), createReview)
//   .get(getAllReview);
module.exports = router;
