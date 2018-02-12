const express = require('express');
const router = express.Router();
const Book = require('../helpers/bookLogic')
const validate = require('../helpers/validate')
const { ValidationError, AlreadyExistsError } = require('../errors/error')


/* GET ALL BOOKS */
router.get('/',async (req, res, next) => {
  try {
    let books = await Book.getBooks();
    res.json(books);
  } catch (error) {
    next(error)
  }
});


/* GET SINGLE BOOK BY ID */
router.get('/:id', async (req, res, next) => {
  try {
    let book = await Book.getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    next(error)
  }
});

// /* CREATE BOOK */
// router.post('/', async (req, res, next) => {
//   try {
//     let book = await validate(req.body);

//     Book.find({'title': book.title}).exec( async (err, docs) => {
//       if (docs.length) {
//         next(new AlreadyExistsError());
//       } else {
//         let result = await Book.create(book);
//         res.json(result)
//       }
//     })
//   } catch (error) {
//     next(error)
//   }
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