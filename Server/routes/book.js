const express =require('express');
const bookController = require('../controllers/book')
const varifyTokenMiddleware =require('../middlewares/varifyToken')
const router = express.Router();



router.get('/' ,bookController.getAllbooks)
router.get('/:id' ,bookController.getSingleBook)
router.post('/',bookController.AddBook)

module.exports =router;