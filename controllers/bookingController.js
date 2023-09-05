const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Booking = require('../models/bookingModel');
const Tour = require('../models/tourModel');

const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  //get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);
  //create a checkout session
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get('host')}/?tour=${
        req.params.tourId
      }&user=${req.user.id}&price=${tour.price}`,
      cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
      customer_email: req.user.email,
      client_reference_id: req.params.tourId,
      line_items: [
        {
          // name: `${tour.name} Tour`,
          // description: tour.summary,
          // images: [
          //   'https://media.istockphoto.com/id/968630976/photo/colorful-landscape-with-high-himalayan-mountains-beautiful-curving-river-green-forest-blue-sky.jpg?s=612x612&w=0&k=20&c=cbrwE0pXqvS_GHEkWSQ7t6jaMbVVjvwqnagOLvNViZ8=',
          // ],
          price: tour.price * 100,
          // currency: 'usd',
          quantity: 1,
        },
      ],
    });
  } catch (error) {
    // console.log(error);
  }
  // console.log(session);
  //create session as response
  res.status(200).json({
    status: 'success',
    // session,
  });
});

exports.createBookingChekout = catchAsync(async (req, res, next) => {
  //this is just temprory,because it's unsecure everyone can make a booking without paying
  const { tour, user, price } = req.query;
  if (!tour && !user && !price) {
    return next();
  }
  await Booking.create({
    tour,
    user,
    price,
  });
  res.redirect(req.OriginalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);