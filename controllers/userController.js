const sharp = require('sharp');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const multer = require('multer');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     // user-userid-currentTimespamp
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next();
  }
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
});

const filterObj = (obj, ...allowed) => {
  const newObj = {};
  Object.keys(obj).forEach((element) => {
    if (allowed.includes(element)) {
      newObj[element] = obj[element];
    }
  });
  return newObj;
};

// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   const users = await User.find();
//   res.status(200).json({
//     status: 'success',
//     results: users.length,
//     data: {
//       users,
//     },
//   });
// });
exports.getAllUsers = factory.getAll(User);
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route has no been yet defined,Please use /signup instead',
  });
};

exports.getUser = factory.getOne(User);
//do not update password with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getMe = (req, res, next) => {
  res.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  //Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'this route is not for passwords updates. Please use /updateMyPassword',
        400,
      ),
    );
  }
  //filtered out useless data which is not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;
  //update the user
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  //Update user document
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
