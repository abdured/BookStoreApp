const express =require('express');
const bookController = require('../controllers/book')
const varifyTokenMiddleware =require('../middlewares/varifyToken')
const router = express.Router();



<<<<<<< HEAD
router.get('/' ,bookController.getAllbooks)
router.get('/:id' ,bookController.getSingleBook)
router.post('/',bookController.AddBook)
=======
router.get('/' ,varifyTokenMiddleware,bookController.getAllbooks)
router.get('/:id' ,varifyTokenMiddleware,bookController.getSingleBook)
router.get('/:id/comments', varifyTokenMiddleware,bookController.getBookComment)
router.patch('/:id/comments' ,varifyTokenMiddleware,bookController.addBookComment)
router.get('/:id/comments/:uid' ,varifyTokenMiddleware,bookController.isCommented)
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96

module.exports =router;