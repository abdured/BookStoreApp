const express =require('express');
const bookController = require('../controllers/book')
const varifyTokenMiddleware =require('../middlewares/varifyToken')
const uploadFile =require('../middlewares/upload')
const router = express.Router();

router.get('/' ,varifyTokenMiddleware,bookController.getAllbooks)
router.get('/:id' ,varifyTokenMiddleware,bookController.getSingleBook)
router.get('/:id/comments', varifyTokenMiddleware,bookController.getBookComment)
router.patch('/:id/comments' ,varifyTokenMiddleware,bookController.addBookComment)
router.get('/:id/comments/:uid' ,varifyTokenMiddleware,bookController.isCommented)
router.post('/', uploadFile.single("file"),bookController.AddBook)
router.patch('/:id',varifyTokenMiddleware,bookController.findAndUpdateBook)
router.delete('/:id',varifyTokenMiddleware,bookController.deleteBook)
module.exports =router;