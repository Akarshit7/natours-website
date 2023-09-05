const multer = require('multer');
const sharp = require('sharp');
const Tour = require('../models/tourModel');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// exports.checkId = (req, res, next, val) => {
// if (req.params.id * 1 > tours.length) {
//   return res.status(404).json({
//     status: 'fail',
//     message: 'Invalid id',
//   });
// }
//   next();
// };

// exports.checkBody = (res, req, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };

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

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.uploadTourImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.resizeTourImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();

  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  //Cover Image
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/tours/${req.body.imageCover}`);

  //Images
  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `tour-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/tours/${filename}`);
      req.body.images.push(filename);
    }),
  );
  next();
});

exports.getAllTours = factory.getAll(Tour);
// exports.getAllTours = catchAsync(async (req, res, next) => {
//   const features = new ApiFeatures(Tour.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .pagination();

//   //Execute the query
//   const tours = await features.query;
//   //SEND RESPONSE
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// });

exports.getTour = factory.getOne(Tour, { path: 'reviews' });
// exports.getTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findById(req.params.id).populate('reviews');
//   //Tour.findOne({_id:req.params.id})
//   if (!tour) {
//     return next(new AppError('NO tour found with that ID', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     results: 1,
//     data: {
//       tour: tour,
//     },
//   });
// });

exports.createTour = factory.createOne(Tour);

// exports.createTour = catchAsync(async (req, res, next) => {
//   const newTour = await Tour.create(req.body);
//   res.status(201).json({
//     status: 'success',
//     data: {
//       tours: newTour,
//     },
//   });
// try {
//   // const newTour=new Tour({

//   // })
//   // newTour.save();

// } catch (error) {
//   res.status(400).json({
//     status: 'fail',
//     message: 'Invalid data send',
//   });
// }
// });

// exports.updateTour = catchAsync(async (req, res, next) => {
//   const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!updatedTour) {
//     return next(new AppError('NO tour found with that ID', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: updatedTour,
//     },
//   });
// });

exports.updateTour = factory.updateOne(Tour);
// exports.deleteTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndDelete(req.params.id);

//   if (!tour) {
//     return next(new AppError('NO tour found with that ID', 404));
//   }
//   //status 204 means no content and
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// });
exports.deleteTour = factory.deleteOne(Tour);

exports.getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: {
        ratingsAverage: { $gte: 4.5 },
      },
    },
    {
      $group: {
        _id: '$difficulty',
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: {
        avgPrice: 1,
      },
    },
    // {
    //   $match: {
    //     _id: { $ne: 'easy' },
    //   },
    // },
  ]);
  res.status(200).json({
    status: 'success',
    data: { stats },
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates',
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lt: new Date(`${year + 1}-01-01`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numToursStarts: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: {
        numToursStarts: -1,
      },
    },
    {
      $limit: 12,
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: { plan },
  });
});

exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;
  if (!lat || lng) {
    return next(
      new AppError(
        'Please provide latitude and longitude in the format lat,lng',
        400,
      ),
    );
  }
  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');
  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;
  if (!lat || lng) {
    return next(
      new AppError(
        'Please provide latitude and longitude in the format lat,lng',
        400,
      ),
    );
  }

  const distances = Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      data: distances,
    },
  });
});
