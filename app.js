const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();
//order of code really matters a lot in express

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// global middleware
//Implementing cors
app.use(cors());
//api.natours.com , front-end natours.com
//then use app.use(cors({
// origin:'https://www.natours.com'
// }))
//pre flight phase
app.options('*', cors());

//serving static files
// app.use(express.static(`/public/`));
app.use(express.static(path.join(__dirname, 'public')));

// 1) set security http headers
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })); //helmet() retuns a handler fn

//development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//limiting request from same api
const limiter = rateLimit({
  max: 100, //how many req form single ip
  windowMs: 60 * 60 * 1000, //in how much time window (here 1hr)
  message: 'Too many request from this IP,please try again in an hour',
});

app.use('/api', limiter); // applying the limiter only to /api route

//body parser , reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

//Data sanitization against NOSQL query attacks
app.use(mongoSanitize());

//data sanitization against XSS
app.use(xssClean());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

app.use(compression());

//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/api/v1/tours', getAllTours);
//? to  make it opetinal and id and x are the param
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',);
// app.delete('/api/v1/tours/:id',deleteTour);

//Routes
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);
//defining the all the unhadled routes
app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server`,
  // });
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.statusCode = 404;
  // err.status = 'fail';
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
