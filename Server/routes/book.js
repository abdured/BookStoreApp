const express =require('express');
const bookController = require('../controllers/book')
const varifyTokenMiddleware =require('../middlewares/varifyToken')
const router = express.Router();



router.get('/' ,varifyTokenMiddleware,bookController.getAllbooks)
router.get('/:id' ,varifyTokenMiddleware,bookController.getSingleBook)
router.get('/:id/comments', varifyTokenMiddleware,bookController.getBookComment)
router.patch('/:id/comments' ,varifyTokenMiddleware,bookController.addBookComment)
router.get('/:id/comments/:uid' ,varifyTokenMiddleware,bookController.isCommented)

module.exports =router;