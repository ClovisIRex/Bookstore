
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const validate = require('../helpers/validate')

/* GET ALL BOOKS */
router.get('/',async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(error)
  }

  // Book.find((err, products) => {
  //   if (err) return next(err);
  //   res.json(products);
  // });
});


// /* GET SINGLE BOOK BY ID */
// router.get('/:id', function(req, res, next) {
//   Book.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* SAVE BOOK */
// router.post('/', function(req, res, next) {
//   Book.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE BOOK */
// router.put('/:id', function(req, res, next) {
//   Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE BOOK */
// router.delete('/:id', function(req, res, next) {
//   Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;