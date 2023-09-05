const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Email = require('../utils/email');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  res.cookie('jwt', token, cookieOptions);
  //remove password from the output
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token: token,
    data: {
      user,
    },
  });
};
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: Date.now(),
  });
  const url = `${req.protocol}://${req.get('host')}/me`;
  await new Email(newUser, url).sendWelcome();
  createSendToken(newUser, 201, res);
  // const token = signToken(newUser._id);
  // res.status(201).json({
  //   status: 'success',
  //   token: token,
  //   data: {
  //     newUser,
  //   },
  // });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  //check if email or password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  //check if the user exist && password is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  //If everything is ok, send the token to the client
  createSendToken(user, 200, res);
  // const token = signToken(user._id);
  // res.status(200).json({
  //   status: 'success',
  //   token,
  // });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: 'success',
  });
});

//Only for render pages Send no error!!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      //Verification token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET,
      );
      //Check if user still exist
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }
      //check if user change password after the JWT(token) was issued
      if (await currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // There is a logged in user
      res.locals.user = currentUser;

      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.protect = catchAsync(async (req, res, next) => {
  //geting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please login to get access', 401),
    );
  }
  //Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //Check if user still exist
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does not longer exist',
        401,
      ),
    );
  }
  //check if user change password after the JWT(token) was issued
  if (await currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'User recently changed the password! Please log in again.',
        401,
      ),
    );
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  // There is a logged in user
  res.locals.user = currentUser;
  next();
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'You dont have the premission to perform this action',
          403,
        ),
      );
    }
    next();
  };

exports.forgotPassord = catchAsync(async (req, res, next) => {
  //get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with that email address', 404));
  }
  //2) generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  //3) Send it to the user's email

  try {
    // await sendEmail({
    //   text: message,
    //   email: user.email,
    //   subject: 'Your password reset token(valid for 10 min)',
    // });
    const resetURL = `${req.protocol}://${req.get(
      'host',
    )}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();
    res.status(200).json({
      status: 'success',
      message: 'Token send to the email!',
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500,
      ),
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //get the user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });

  //if token has not been expired and there is user , set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  await user.save();
  // update changepasswordAt property for the user

  //Log user in , send the JWT token
  //If everything is ok, send the token to the client
  createSendToken(user, 200, res);
  // const token = signToken(user._id);
  // res.status(200).json({
  //   status: 'success',
  //   token,
  // });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //1) Get users from collection
  const user = await User.findById(req.user.id).select('+password');
  // if (!user) {
  //   return next(new AppError(''));
  // }

  // 2) check if the PATCHed password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong', 401));
  }
  // 3) if so , update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  //User.findandUpdate will not work as Intended!!

  //4) Log user in, send JWT token
  createSendToken(user, 200, res);
  // const token = signToken(user._id);
  // res.status(200).json({
  //   status: 'success',
  //   token,
  // });
});
