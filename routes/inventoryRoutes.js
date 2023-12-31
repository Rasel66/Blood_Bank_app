const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController } = require('../controllers/inventoryController');

const router = express.Router();

//Add inventory

router.post('/create-inventory', authMiddleware,createInventoryController)


module.exports = router