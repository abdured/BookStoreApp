const express =require('express');
const userController = require('../controllers/users')
const varifyTokenMiddleware =require('../middlewares/varifyToken')
const router = express.Router();



router.get('/' ,varifyTokenMiddleware,userController.getAllUsers)
router.post('/login' ,userController.login)
router.post('/signup' ,userController.signup)

module.exports =router;