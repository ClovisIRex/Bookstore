const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const validate = require('../helpers/validate')
const { ValidationError, AlreadyExistsError } = require('../errors/error')


/* GET ALL BOOKS */ 
router.get('/',async (req, res, next) => { 
  try { 
    let books = await Book.find(); 
    res.json(books); 
  } catch (error) { 
    next(error) 
  } 
}); 


/* GET SINGLE BOOK BY ID */ 
router.get('/:id', async (req, res, next) => {
  try {
    let books = await Book.findById(req.params.id)
    res.json(books)
  } catch (error) {
    next(err)
  }
}); 

/* CREATE BOOK */
router.post('/', async (req, res, next) => {
  try {
    let book = await validate(req.body);

    Book.find({'title': book.title}).exec( async (err, docs) => {
      if (docs.length) {
        next(new AlreadyExistsError());
      } else {
        let result = await Book.create(book);
        res.json(result)
      }
    })
  } catch (error) {
    next(error)
  }
});

/* UPDATE BOOK */
router.put('/:id', async (req, res, next) => {
  try {
    let result = await Book.findByIdAndUpdate(req.params.id,req.body)
    res.json(result)
  } catch (error) {
    next(error)  
  }
});

/* DELETE BOOK */
router.delete('/:id', async (req, res, next) => {
  try {
    let result = await Book.findByIdAndRemove(req.params.id)
    res.json(result)
  } catch (error) {
    next(err)
  }
});

module.exports = router;