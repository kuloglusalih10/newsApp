const express = require('express');
const router = express.Router();
const {getForexs} = require('../controllers/forexController')


router.get('/', getForexs);



 module.exports = router