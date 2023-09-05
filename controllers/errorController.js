const AppError = require('../utils/appError');

const handleCastErrorDB = (error) => {
  const message = `Invalid ${error.path} : ${error.value}.`;
  return new AppError(message, 400);
};

const handleDublicateErrorDB = (error) => {
  const value = error.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate field value :${value} Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};
const handleJWTError = () =>
  new AppError('Invalid Token please login again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please login again.', 401);

const sendErrorDev = (err, req, res) => {
  //api
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }
  //Rendered website
  return res.status(err.statusCode).render('error', {
    title: 'Something went Wrong',
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  //error for the api
  if (req.originalUrl.startsWith('/api')) {
    //Operational error : trusted error : can send them to the client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
      //Programming or other unknown error ;dont want to leak details to the client
    }
    //log to the console
    console.log('Error', err);

    //send the generic message to the client
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }

  // for the rendered page

  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went Wrong',
      msg: err.message,
    });
  }
  console.log('Error', err);

  return res.status(err.statusCode).render('error', {
    title: 'Something went Wrong',
    msg: 'Please try again later',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDublicateErrorDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, req, res);
  }
};
