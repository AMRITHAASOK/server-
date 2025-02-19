const express= require('express')

const authController = require('../controllers/authController')
const cvController = require('../controllers/cvController');
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = express.Router()

router.post('/register',authController.register)
router.post('/login',authController.login)


router.post('/create',jwtMiddleware,cvController.createCV);
router.get('/list',jwtMiddleware,cvController.getAllCVs);
router.get('/view/:id',jwtMiddleware,cvController.getCVById);
router.put('/update/:id',jwtMiddleware,cvController.updateCV);
router.delete('/delete/:id',jwtMiddleware,cvController.deleteCV);

module.exports = router