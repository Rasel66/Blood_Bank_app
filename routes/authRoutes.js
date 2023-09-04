const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register',registerController);
router.post('/login', loginController);

//get current user
router.get('/current-user', authMiddleware, currentUserController)

module.exports = router;